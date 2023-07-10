import { updateSampleSection } from './sample-base';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import { TitleBar } from './title-bar';
import {useEffect} from "react";


DocumentEditorContainerComponent.Inject(Toolbar);
// tslint:disable:max-line-length
function Default() {
  useEffect(() => {
    updateSampleSection();
    rendereComplete();
  }, []);
  let hostUrl = 'https://services.syncfusion.com/react/production/api/documenteditor/';
  let container;
  let titleBar;
  function rendereComplete() {
    window.onbeforeunload = function () {
      return 'Want to save your changes?';
    };
    container.documentEditor.pageOutline = '#E0E0E0';
    container.documentEditor.acceptTab = true;
    container.documentEditor.resize();
    titleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), container.documentEditor, true);
  }
  return (<div className='control-pane'>
    <div className='control-section'>
      <div id='documenteditor_titlebar' className="e-de-ctn-title"></div>
      <div id="documenteditor_container_body">
        <DocumentEditorContainerComponent id="container" ref={(scope) => { container = scope; }} style={{ 'display': 'block' }} height={'790px'} serviceUrl={hostUrl} enableToolbar={true} locale='en-US'/>
      </div>
    </div>
  </div>);
}
export default Default;
