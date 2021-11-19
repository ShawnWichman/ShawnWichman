function startup(dbinfo) {

  background.initBackground()
    .then((_background) => {
      const connectors = _background.initCommunication();
      const  isStandalone = false;  
      Maverick.initJsContext(connectors.extensionMaverickConnector, connectors.maverickCarbonConnector, [],isStandalone, dbinfo);

    });
}
