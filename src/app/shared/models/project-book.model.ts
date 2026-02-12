export interface ProjectBook {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    repoUrl?: string;
    demoUrl?: string;
    galleryImages: string[];


    spineColor: string;
    spineTextColor: string;
}
