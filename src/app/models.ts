export interface PanelList{
    id: string;
    name: string;
    description: string;
    banner: string;
}

export interface PanelItem {
    title: string;
    description: string;
    createdAt: string;
    banner: string;

}
export interface Panel{
    id: string;
    name: string;
    description: string;
    banner: string;
    items: PanelItem[];
}