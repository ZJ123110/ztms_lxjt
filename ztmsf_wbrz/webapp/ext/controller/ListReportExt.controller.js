sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {

        onSqidPress: function (oEvent) {
            var oClickedRowData = oEvent.getSource().getBindingContext().getObject();
            let url = window.location.origin + "/home/index.html?saml2=disabled#ZTMSF_LXJT-manage&//ZTMS_C_LXJT(db_key=guid'" + oClickedRowData.parent_key + "',IsActiveEntity=true)";
            window.open(url);
        },
        onHtdjPress: function (oEvent) {
            var oClickedRowData = oEvent.getSource().getBindingContext().getObject();
            // let url = window.location.origin + "/home/index.html?saml2=disabled#ZRRE_LCM_001-opendetail?FPM_EDIT_MODE=R&KEY=" + oClickedRowData.ht_key + "&SKIP_INITIAL_SCREEN=X&TAB_ID=CONT1";
            let url = window.location.origin + "/home/index.html?saml2=disabled#ZTMSF_JKHT-manage&//ZTMS_C_JKHT_ROT(db_key=guid'" + oClickedRowData.ht_key + "',IsActiveEntity=true)";

            switch (oClickedRowData.form_code) {
                //借款合同登记
                case 'FMS01':
                    url = window.location.origin + "/home/index.html?saml2=disabled#ZTMSF_JKHT-manage&//ZTMS_C_JKHT_ROT(db_key=guid'" + oClickedRowData.ht_key + "',IsActiveEntity=true)";
                    break;
                //银团合同登记
                case 'FMS02':
                    url = window.location.origin + "/home/index.html?saml2=disabled#ZTMSF_YTHT-manage&//ZTMS_C_YTHT_ROT(db_key=guid'" + oClickedRowData.ht_key + "',IsActiveEntity=true)";
                    break;
                //债券登记
                case 'FMS03':
                    url = window.location.origin + "/home/index.html?saml2=disabled#ZTMSF_ZQDJ-manage&//ZTMS_C_ZQDJ_ROT(db_key=guid'" + oClickedRowData.ht_key + "',IsActiveEntity=true)";
                    break;
                //资产证券化登记
                case 'FMS05':
                    url = window.location.origin + "/home/index.html?saml2=disabled#ZTMSF_ZCZQ-manage&//ZTMS_C_ZCZQ_ROT(db_key=guid'" + oClickedRowData.ht_key + "',IsActiveEntity=true)";
                    break;
            }

            window.open(url);
        }
    };
});