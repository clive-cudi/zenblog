export interface NavLink {
    label: string;
    linkTo: string;
    isParent?: {
        status: boolean;
        children: null | NavLink[]
    }
}