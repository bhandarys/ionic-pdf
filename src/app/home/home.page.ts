import { Component } from '@angular/core';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
                private transfer: FileTransfer
              , private fileOpener: FileOpener
              , private file: File
              , private document: DocumentViewer
  ) {}

  download() {
    const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    const externalApplicationStorageDirectory = this.file.externalApplicationStorageDirectory;
    const fileTransfer: FileTransferObject = this.transfer.create();
    const file = (new Date()).getTime();
    fileTransfer.download(url, `${externalApplicationStorageDirectory}${file}`).then((entry) => {
      // this.fileOpener.open(entry.toURL(), 'application/pdf').then(() => alert(`File - ${file}`));
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      };
      this.document.viewDocument(entry.toURL(), 'application/pdf', options);
    }).catch((e) => {
      alert(e.exception);
    });
  }
}
