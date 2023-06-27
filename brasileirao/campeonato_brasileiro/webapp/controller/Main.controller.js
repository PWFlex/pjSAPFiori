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
             
            
                // Criação das variáveis 
                var dadosGerais = {
                    rodada : '10aaa',
                    campeonato: "Brasileirãoo 2023 do Canal Fiorinet"
                };

                // Criação do Modelo
                var dadosModel = new JSONModel();
                dadosModel.setData(dadosGerais);
                var view = this.getView();
                view.setModel(dadosModel, "ModeloDadosGerais");
            



            }
        });
    });
