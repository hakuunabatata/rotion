import { electronAPI, ElectronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'

declare global {
  export interface Window {
    electron: ElectronAPI
    api: typeof api
  }
}

const api = {
  fetchDocuments: async (params: unknown): Promise<void> =>
    ipcRenderer.invoke('fetch-documents', params),
  closeApp: async (): Promise<void> => ipcRenderer.send('close'),
  maximize: async (): Promise<void> => ipcRenderer.send('maximize'),
  minimize: async (): Promise<void> => ipcRenderer.send('minimize')
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
