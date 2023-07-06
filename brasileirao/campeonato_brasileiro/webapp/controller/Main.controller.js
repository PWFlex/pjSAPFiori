sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";
        return Controller.extend("campeonatobrasileiro.controller.Main", {
            onInit: function () {

                

            /* modo offline buscando de arquivo 
                // Criação das variáveis 
                var dadosGerais = {
                    rodada : '10a',
                    campeonato: "Brasileirãoo 2023 do Canal Fiorinet"
                };

                // Criação do Modelo
                var dadosModel = new JSONModel();
                dadosModel.setData(dadosGerais);
                var view = this.getView();
                view.setModel(dadosModel, "ModeloDadosGerais");
            */
            //Objetos vazios
            var dadosGerais = {};
            var classificacao = {};
            var partidas = {};

            // Modelos para cada objeto
            var dadosModel = new JSONModel(dadosGerais);
            var classificacaoModel = new JSONModel(classificacao);
            var partidasModel = new JSONModel(partidas);    

            //atribuir modelos a tela - view
            this.getView().setModel(dadosModel, "ModeloDadosGerais");
            this.getView().setModel(classificacaoModel, "ModeloClassificacao");
            this.getView().setModel(partidasModel, "ModeloPartidas");

            this.buscarDadosGerais();
            this.buscarClassificacao();
  

            },

            // novo método
            buscarDadosGerais: function(){
                //obter model para atualizar
                var dadosModel2 = this.getView().getModel("ModeloDadosGerais");
                             
                const configuracoes = {
                    url : "https://api.api-futebol.com.br/v1/campeonatos/10",
                    //url : "https://api.3tentos.com.br/hml/mvteste/v1/prod",
                    //url : "https://pwflex.net/api/",
                   //url : "http://localhost:8887/apiMV/",
                   //url : "http://localhost:3000/dados",                   
                    
                    method : "GET",
                    async : true,
                    crossDomain : true ,
                    headers : {
                        "Authorization" : "Bearer live_556e9b64bd203439b744968bf9fdc4"
                    }                   
                };
                // chamada da API
                $.ajax(configuracoes)                
                //sucesso
                /*.always(function(resposta){
                    console.clear();
                    console.log(resposta);                    
                })*/
                 .done(function(resposta){
                   // console.clear();
                 //  console.log(resposta);
                    debugger
                    dadosModel2.setData(resposta);
                    this.buscarPartidas(resposta.rodada_atual.rodada);
                 
                 /*   var view = this.getView();
                    view.setModel(dadosModel2, "ModeloDadosGerais");*/
                    //função done passa a reconhecer função pai
                }.bind(this))                            
                //caso der erro
                .fail(function(erro){
                    console.clear();
                    console.log(resposta);
                    debugger
                })
                ;                
            },

            // novo método
            buscarClassificacao: function(){
            //obter model para atualizar
            //var dadosModel2 = this.getView().getModel("ModeloDadosGerais");
            
            var classificacaoModel2 = this.getView().getModel("ModeloClassificacao");
            
            const configuracoes = {
                url : "https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
                //url : "https://api.3tentos.com.br/hml/mvteste/v1/prod",
                //  url : "https://pwflex.net/api/",
                //url : "http://localhost:8887/apiMV/",
                //url : "http://localhost:3000/dados",                                                   
                method : "GET",
                async : true,
                crossDomain : true ,                
                headers : {
                   "Authorization" : "Bearer live_556e9b64bd203439b744968bf9fdc4"
                          }                
            };
            // chamada da API
                $.ajax(configuracoes)                
                 //sucesso
                  /*.always(function(resposta){
                      console.clear();
                      console.log(resposta);                    
                   })*/
                    .done(function(resposta){
                                               
                    classificacaoModel2.setData(  {"Classificacao": resposta});
             
                     })                            
                         //caso der erro
                            .fail(function(erro){
                                console.clear();
                                console.log(resposta);
                                debugger
                            })
                            ;                
            },


                         // novo método
            buscarPartidas: function(rodada){
                //obter model para atualizar
                //var dadosModel2 = this.getView().getModel("ModeloDadosGerais");
                
                var partidasModel2 = this.getView().getModel("ModeloPartidas");
                
                const configuracoes = {
                    url : "https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/" + rodada,
                    //url : "https://api.3tentos.com.br/hml/mvteste/v1/prod",
                    //  url : "https://pwflex.net/api/",
                    //url : "http://localhost:8887/apiMV/",
                    //url : "http://localhost:3000/dados",                                                   
                    method : "GET",
                    async : true,
                    crossDomain : true ,                
                    headers : {
                       "Authorization" : "Bearer live_556e9b64bd203439b744968bf9fdc4"
                              }                
                };
                // chamada da API
                    $.ajax(configuracoes)                
                     //sucesso
                      /*.always(function(resposta){
                          console.clear();
                          console.log(resposta);                    
                       })*/
                        .done(function(resposta){
                        debugger                                   
                        partidasModel2.setData( resposta );
                 
                         })                            
                             //caso der erro
                                .fail(function(erro){
                                    console.clear();
                                    console.log(erro);
                                    debugger
                                })
                                ;                
                            }

        });
    });
