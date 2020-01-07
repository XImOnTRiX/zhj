export const GET_TOKEN = '9c7f53a16f88bd6248ccbfe6a8dcbb';
export const GET_TOKEN_SINGLETONS = '3dd3e1e586acc1671665cb000efdc3';
export const MASTER_KEY = '684931fe886cf92bb0d5f83e3ba002';

const origin = window.location.origin;

export const GET_URL = `${origin}/cockpit-zhj/api/collections/get`;
export const GET_URL_SINGLETONS = `${origin}/cockpit-zhj/api/singletons/get`
// export const GET_URL = `http://127.0.0.1/cockpit-zhj/api/collections/get`;
// export const GET_URL_SINGLETONS = `http://127.0.0.1/cockpit-zhj/api/singletons/get`

// export const IMAGE_PATH = `http://127.0.0.1`;
export const IMAGE_PATH = `${origin}`;
// export const IMAGE_PATH_EXTENDED = `http://127.0.0.1/cockpit-zhj/storage/uploads`;
export const IMAGE_PATH_EXTENDED = `${origin}/cockpit-zhj/storage/uploads`;

// export const SAVE_URL = `http://127.0.0.1/cockpit-zhj/api/collections/save`;
export const SAVE_URL = `${origin}/cockpit-zhj/api/collections/save`;
