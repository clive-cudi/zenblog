export interface NavLink {
    label: string;
    linkTo: string;
    isParent?: {
        status: boolean;
        children: null | NavLink[]
    }
}

export type TSlug = {
    current: string;
}

export interface IPost {
    slug: TSlug;
    title: string;
    body: any;
    mainImage: object
}

export interface IMainImage {
    _type: "image",
    asset: object
}

export interface IAuthor {
    name: string;
    image: string;
    bio: string;
    profession: string;
    slug: TSlug;
    title: string
}