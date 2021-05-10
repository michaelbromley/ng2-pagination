import {Component} from '@angular/core';
import {SafeHtml, DomSanitizer} from '@angular/platform-browser';
import {Highlighter} from '../../providers/highlighter.service';

import * as marked from 'marked';
import * as readme from '!!raw-loader!../../../../README.md';
const parsedReadme = marked(readme.default);

@Component({
    selector: 'documentation-page',
    templateUrl: './documentation-page.component.html'
})
export class DocumentationPageComponent {

    readmeContent: SafeHtml;

    constructor(private sanitizer: DomSanitizer,
                private highlighter: Highlighter) {
        this.readmeContent = sanitizer.bypassSecurityTrustHtml(parsedReadme);
    }

    ngAfterViewInit() {
        this.highlighter.highlight();
    }
}
