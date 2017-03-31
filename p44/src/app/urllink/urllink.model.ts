export class UrlLink {
    imageUrl: string;
    documentType: string;
    imageFormat: string;
    proNumber: string;

    constructor(imageUrl: string, documentType: string, imageFormat:string,  proNumber: string){
        this.imageUrl = imageUrl;
        this.documentType = documentType;
        this.imageFormat = imageFormat;
        this.proNumber = proNumber;
    }

    domain(): string {
        try {
            const domainAndPath: string = this.imageUrl.split('/')[4];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}