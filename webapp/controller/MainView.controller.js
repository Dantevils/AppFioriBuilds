sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("namespacefiori.fioriapp.controller.MainView", {
            onInit: function () {
                //const oJSONMODEL = new sap.ui.model.json.JSONMODEL();
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("../model/SelectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
                console.log(oJSONModel);
            },

            onFilter: function(oEvent){
            },
            onClearFilter: function(){
                const oModelSelScreen = this.getView().getModel("selectionScreen");
                oModelSelScreen.setProperty("/ShipName","");
                oModelSelScreen.setProperty("/CountryKey","");

                //const oModelshipName = this.getView().getModel("shipName");
                //oModelshipName.setProperty("shipName","");
            }
        });
    });
