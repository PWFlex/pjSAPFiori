sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("campeonatobrasileiro.controller.Main", {
            onInit: function () {
                //variáveis 
                //variáveis de texto
                var time = "Palmeiras";

                //variável numérica
                var pontos = 15;
                
                //listas - repetição de variáveis do mesmo texto (conhecidos como Array)
                var top4 = ["Botafogo","Palemiras","São Paulo","Atlético-MG"];

                //escrever dados no Console
                console.log(time);
                console.log(pontos);
                console.log(top4);


                //Objetos {} - Chaves definem objetos
                var meuTime = {
                    nome: "Grêmio",
                    pontos: 14,
                    artilheiro: ["Luis Suarez","Vina","Salcicha","Scooby"],
                    adicionarPontos: function(pontosNovos){
                        this.pontos = this.pontos + pontosNovos;
                    }
                };


                console.log(meuTime);

                console.log("Gremio Ganhou");
                meuTime.adicionarPontos(3);

                console.log(meuTime.pontos);

            }
        });
    });
