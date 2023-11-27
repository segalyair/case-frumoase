// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App { }

namespace svelteHTML {
    interface HTMLAttributes<T> {
        'on:pagefind'?: (event: CustomEvent) => void
        
    }
}

interface Window {
    CUSDIS: { initial: () => void };
    'setPageFind'?: (value: any) => void
}
interface Document {
    webkitFullscreenElement: FullscreenElement;
    mozFullScreenElement: FullscreenElement;
    msFullscreenElement: FullscreenElement;
    webkitExitFullscreen: ExitFullscreen;
    mozCancelFullScreen: ExitFullscreen;
    msExitFullscreen: ExitFullscreen;
}

interface HTMLElement {
    webkitRequestFullscreen?: RequestFullscreen;
    mozRequestFullScreen?: RequestFullscreen;
    msRequestFullscreen?: RequestFullscreen;
}

type ExitFullscreen = typeof document.exitFullscreen
type RequestFullscreen = typeof document.documentElement.requestFullscreen
type FullscreenElement = typeof document.fullscreenElement;
