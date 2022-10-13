export class WebPage {
    id: string
    title: string
    subtitle: string
    headerColor: string

    sections: WebPageSection[]

    constructor(id: string, title: string, subtitle: string, headerColor: string, sections: WebPageSection[]) {
        this.id = id
        this.title = title
        this.subtitle = subtitle
        this.headerColor = headerColor

        this.sections = sections
    }
}

export enum WebPageSectionType {
    description,
    leftAlignedDescription,
    rightAlignedDescription,
    photo
}

export class WebPageSection {
    sectionType: WebPageSectionType
    title: string | undefined
    description: string | undefined
    photoURL: string | undefined

    constructor(type: WebPageSectionType, title: string | undefined, description: string | undefined, photoURL: string | undefined) {
        this.title = title
        this.sectionType = type
        this.description = description
        this.photoURL = photoURL
    }
}