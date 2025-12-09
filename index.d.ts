import * as i0 from '@angular/core';
import { OnChanges, ElementRef, SimpleChanges, ModuleWithProviders } from '@angular/core';

/**
 * more complex matjax content wich suppor latex and mathml seperately
 * will be considered for future development
 */
interface MathjaxContent {
    latex?: string;
    mathml?: string;
}
/**
 * config - http://docs.mathjax.org/en/latest/web/configuration.html#configuring-and-loading-mathjax
 * src - cdn url to js
 */
declare class RootMathjaxConfig {
    config?: {
        [name: string]: any;
    };
    src?: string;
}

declare const isMathjax: (expression: string) => boolean;
/**
 * find and return mathjax string from input
 * @param expressions
 * @returns mathjax string
 */
declare const getMathjaxContent: (expressions: MathjaxContent | string) => string;
/**
 * used to fix few issues with mathjax string in angular
 * @param  {string} jax mathjax string
 * @returns {string} fixed string
 */
declare const fixMathjaxBugs: (jax: string) => string;

declare const utils_d_fixMathjaxBugs: typeof fixMathjaxBugs;
declare const utils_d_getMathjaxContent: typeof getMathjaxContent;
declare const utils_d_isMathjax: typeof isMathjax;
declare namespace utils_d {
  export {
    utils_d_fixMathjaxBugs as fixMathjaxBugs,
    utils_d_getMathjaxContent as getMathjaxContent,
    utils_d_isMathjax as isMathjax,
  };
}

declare class MathjaxDirective implements OnChanges {
    private el;
    private mathJaxExpressions?;
    private readonly element;
    set mathjax(val: MathjaxContent | string);
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    private typeset;
    static ɵfac: i0.ɵɵFactoryDeclaration<MathjaxDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MathjaxDirective, "mathjax,[mathjax]", never, { "mathjax": { "alias": "mathjax"; "required": false; }; }, {}, never, never, false, never>;
}

declare class MathjaxModule {
    private moduleConfig;
    constructor(moduleConfig: RootMathjaxConfig);
    private addConfigToDocument;
    private addMatjaxToDocument;
    static forRoot(config?: RootMathjaxConfig): ModuleWithProviders<MathjaxModule>;
    static forChild(): ModuleWithProviders<MathjaxModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MathjaxModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MathjaxModule, [typeof MathjaxDirective], never, [typeof MathjaxDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MathjaxModule>;
}

export { utils_d as MathJaxUtils, MathjaxDirective, MathjaxModule };
