/* eslint-disable @typescript-eslint/consistent-type-definitions -- ok */

type SingleRequest = {
  enableSingleRequest: () => void;
};

type Service = {
  addService: (service: Service) => Slot;
};

type Slot = {
  defineSlot: (adUnitPath: string, size: [number, number], divId: string) => Slot;
  addService: (service: Service) => Slot;
};

type Googletag = {
  cmd: Array<() => void>;
  pubads: () => SingleRequest & Service;
  enableServices: () => void;
  display: (divId: string) => void;
};


declare global {
  interface Window {
    googletag: Googletag;
  }
}