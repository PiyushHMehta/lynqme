import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsAbout() {
    const cards = [
        {
            title: "Majestic Mountains",
            src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Experience the grandeur of towering peaks and breathtaking views.",
        },
        {
            title: "Winding Trails",
            src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Explore off-the-beaten-path trails and hidden gems.",
        },
        {
            title: "Endless Oceans",
            src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Savor the refreshing ocean breeze and stunning coastal views.",
        },
        {
            title: "Enchanting Forests",
            src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Discover the magic of vibrant foliage and serene surroundings.",
        },
        {
            title: "Serene Valleys",
            src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description: "Immerse yourself in the peacefulness of lush green valleys.",
        },
        {
            title: "Being Schizophrenic",
            src: "https://assets.aceternity.com/the-first-rule.png",
            description: "Embrace adventure with the essential rule: always be prepared.",
        },
    ];

    return (
        <div className="container mx-auto mb-20">
            <FocusCards cards={cards} />
        </div>
    );
}
