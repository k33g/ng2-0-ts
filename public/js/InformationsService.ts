
export class InformationsService {
  applicationName: string = "NG2-0-TS";
  version: string = "01-services";

  constructor() {

  }

  getApplicationName() {
    return this.applicationName;
  }

  getVersion() {
    return this.version;
  }
}