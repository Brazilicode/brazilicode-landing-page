import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-sm font-medium hover:text-primary transition-colors"
    >
      {i18n.language === 'pt-BR' ? '🇺🇸 EN' : '🇧🇷 PT'}
    </Button>
  );
}