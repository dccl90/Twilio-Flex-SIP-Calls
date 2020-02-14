import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';


const PLUGIN_NAME = 'TestPlugin';

export default class TestPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    //Set "From" value in conference instructions to allow inbound calls from the Client SDK and SIP Domains
  	flex.Actions.addListener("beforeAcceptTask", (payload) => {
  		payload.conferenceOptions.From = payload.task.attributes.from;
  	});
  }

}
