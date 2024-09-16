import coverImage from "./assets/images/IMG_20210621_071534.jpg"
const logotext = "USAMAAKBAR";
const meta = {
    title: "Usama Akbar",
    description: "I’m Usama Akbar, a professional photographer, capturing moments that last forever.",
};

const introdata = {
    title: "I’m Usama Akbar",
    animated: {
        first: "Professional Photographer",
        second: "I capture beautiful moments",
        third: "I create timeless memories",
    },
    description: "As a photographer, I strive to capture the essence of each moment, creating visual stories that resonate for a lifetime.",
    your_img_url: coverImage,  // Replace this with Usama's actual image link
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am Usama Akbar, a passionate photographer with an eye for detail. I specialize in portrait, landscape, and event photography, bringing out the beauty in every moment. With years of experience behind the lens, I aim to deliver high-quality images that tell a story.",
};

const worktimeline = [
    {
        jobtitle: "Freelance Photographer",
        where: "Various Clients",
        date: "2022-Present",
    },
    {
        jobtitle: "Lead Photographer",
        where: "AK Photography",
        date: "2020-2022",
    },
    {
        jobtitle: "Assistant Photographer",
        where: "Studio 101",
        date: "2018-2020",
    },
];

const skills = [
    {
        name: "Photography",
        value: 95,
    },
    {
        name: "Photo Editing",
        value: 90,
    },
    {
        name: "Lighting Techniques",
        value: 85,
    },
    {
        name: "Adobe Photoshop",
        value: 90,
    },
    {
        name: "Adobe Lightroom",
        value: 85,
    },
];

const services = [
    {
        title: "Portrait Photography",
        description: "Capturing the essence of individuals with professional portrait photography.",
    },
    {
        title: "Event Photography",
        description: "Documenting special occasions with a creative and professional touch.",
    },
    {
        title: "Photo Editing",
        description: "Enhancing and perfecting photos using advanced editing techniques.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale",  // Replace with actual portfolio images
        description: "A serene portrait capturing raw emotion.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",  // Replace with actual portfolio images
        description: "A beautiful landscape shot at sunset.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",  // Replace with actual portfolio images
        description: "Wedding moments captured in the perfect frame.",
        link: "#",
    },
    // Add more images as necessary
];

const contactConfig = {
    YOUR_EMAIL: "us346466@gmail.com",
    YOUR_FONE: "+923340317385",
    description: "If you'd like to book a session or inquire about my services, feel free to reach out through email or phone. Let's capture your best moments together.",
    YOUR_SERVICE_ID: "service_id",  // Configure with actual EmailJS details
    YOUR_TEMPLATE_ID: "template_id",  // Configure with actual EmailJS details
    YOUR_USER_ID: "user_id",  // Configure with actual EmailJS details
};

const socialprofils = {
    Instagram: "https://github.com/usamaakbar",
    facebook: "https://facebook.com/usamaakbarphotography",
    linkedin: "https://linkedin.com/in/usamaakbar",
    twitter: "https://twitter.com/usamaakbarphoto",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
