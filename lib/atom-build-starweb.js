'use babel';

export function provideBuilder() {
  return class StarwebBuildProvider {
    constructor(cwd) {
      this.cwd = cwd;
    }

    getNiceName() {
      return 'Starweb';
    }

    isEligible() {
      var textEditor = atom.workspace.getActiveTextEditor();
      if (!textEditor || !textEditor.getPath() || !textEditor.getText()) {
        return false;
      }

      var path = textEditor.getPath(),
          text = textEditor.getText();

      return path.endsWith('.p') ||
             path.endsWith('.w') ||
             path.endsWith('.i') ||
            (path.endsWith('.html') && /speedscript/i.test(text));
    }

    settings() {
      return [{
        name: 'Starweb: GIS (build)',
        cmd: 'echo "Starweb: GIS (build)"'
      },
      {
        name: 'Starweb: GIS+GUS (build)',
        cmd: 'echo "Starweb: GIS+GUS (build)"'
      },
      {
        name: 'Starweb: GIS (run)',
        cmd: 'echo "Starweb: GIS (run)"'
      },
      {
        name: 'Starweb: GIS+GUS (run)',
        cmd: 'echo "Starweb: GIS+GUS (run)"'
      }];
    }
  };
}
