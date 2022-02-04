import {es} from './es';
import {en} from './en';

const supportedLocales= {
    es,
    en,
}

export const translate = (locale, namespace, entry) => supportedLocales[locale][namespace][entry];