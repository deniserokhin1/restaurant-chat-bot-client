declare module '*.vue' {
    import { DefineComponent } from 'vue';
    // eslint-disable-next-line
    const component: DefineComponent<{}, {}, any>
    export default component;
}

interface ImportMetaEnv {
    readonly VITE_API_URL?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare global {
    import { WebApp } from 'telegram-web-app'
    interface Window {
        Telegram: {
            WebApp: WebApp;
        };
    }
}

