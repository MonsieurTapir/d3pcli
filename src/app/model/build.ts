export class Build {
    id: string;
    name: string;
    className: string;
    url: string;
    author: string;
    description: string;
    addedAt: string;
    items:{[slot: string]: number};
    cubed:{[slot: string]: number};
    skills:{[slot: string]: number};
    gems:{[slot: string]: number};
}
