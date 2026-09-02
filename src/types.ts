export interface FounderSettings {
  whatsapp: string;
  email: string;
  instagram: string;
  address: string;
  lessonPriceIndividual: number;
  lessonPricePack5: number;
  lessonPricePack10: number;
  lessonPriceGroup: number;
  coachName: string;
  coachExperience: number;
  coachBio: string;
}

export const DEFAULT_SETTINGS: FounderSettings = {
  whatsapp: "+351969795753", // Clean number for WhatsApp API
  email: "formatskateschool@gmail.com",
  instagram: "formatskateschool",
  address: "Skatepark de Castelo Branco, Avenida do Empresário, 6000-767 Castelo Branco",
  lessonPriceIndividual: 25,
  lessonPricePack5: 85,
  lessonPricePack10: 150,
  lessonPriceGroup: 15,
  coachName: "João Pedro",
  coachExperience: 17,
  coachBio: "Chamo-me João Pedro. Comecei a andar de skate aos 12 anos e nunca parei. Hoje ensino com a mesma seriedade com que aprendi - e com o mesmo respeito pela cultura."
};
