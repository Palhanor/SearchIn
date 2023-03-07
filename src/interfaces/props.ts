import Website from "./website";
import { ModalTab, SidebarTab } from "./tabs";

export interface ModalProps {
    modalWindow: ModalTab;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NavigationProps {
    sidebarContent: SidebarTab;
    setSidebarIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setSidebarContent: React.Dispatch<React.SetStateAction<SidebarTab>>;
}

export interface SearchProps {
    websites: Website[];
}

export interface PreviewProps {
    advancedQueries: string[];
    selectedWebsites: Website[];
    isAdvancedSearch: () => boolean;
}

export interface SidebarProps {
    sidebarIsVisible: boolean;
    sidebarContent: SidebarTab;
    websites: Website[];
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setWebsites: React.Dispatch<React.SetStateAction<Website[]>>;
    setModalWindow: React.Dispatch<React.SetStateAction<ModalTab>>;
}

export interface CardProps {
    website: Website;
    setWebsites: React.Dispatch<React.SetStateAction<Website[]>>;
}

export interface TipsProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setModalWindow: React.Dispatch<React.SetStateAction<ModalTab>>;
}
