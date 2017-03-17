'use babel';

import AtomBuildStarwebView from './atom-build-starweb-view';
import { CompositeDisposable } from 'atom';

export default {

  atomBuildStarwebView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomBuildStarwebView = new AtomBuildStarwebView(state.atomBuildStarwebViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomBuildStarwebView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-build-starweb:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomBuildStarwebView.destroy();
  },

  serialize() {
    return {
      atomBuildStarwebViewState: this.atomBuildStarwebView.serialize()
    };
  },

  toggle() {
    console.log('AtomBuildStarweb was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
