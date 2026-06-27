import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FounderSettings } from "../types";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: FounderSettings;
}

export default function PrivacyPolicyModal({ isOpen, onClose, settings }: PrivacyPolicyModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#111111]/50">
              <h2 className="text-xl font-display font-bold uppercase tracking-wide text-white">
                Política de Privacidade
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto font-body text-gray-300 space-y-8 custom-scrollbar">
              
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Última actualização: Junho 2025</p>
                <p>
                  A <strong>FormaT - Skate &amp; Comunidade</strong> é uma escola de skateboarding sediada em Castelo Branco, Portugal.
                </p>
              </div>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">1. Quem somos</h3>
                <p>Para efeitos desta política, o responsável pelo tratamento dos teus dados é:</p>
                <div className="bg-black/30 p-4 rounded border border-white/5 space-y-1 text-sm">
                  <p className="font-bold text-white">FormaT - Skate &amp; Comunidade</p>
                  <p>Castelo Branco, Portugal</p>
                  <p>Email: {settings.email}</p>
                  <p>Telefone / WhatsApp: {settings.whatsapp}</p>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">2. Que dados recolhemos e porquê</h3>
                <p>Recolhemos apenas os dados que nos forneces directamente, através do formulário de inscrição ou por contacto via WhatsApp ou email.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400">
                        <th className="py-2 px-3 font-semibold">Dado</th>
                        <th className="py-2 px-3 font-semibold">Finalidade</th>
                        <th className="py-2 px-3 font-semibold">Base legal</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-3">Nome do encarregado de educação</td>
                        <td className="py-3 px-3">Identificação e comunicação</td>
                        <td className="py-3 px-3">Execução de contrato (art. 6.º, n.º 1, al. b) do RGPD)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">Contacto (telefone ou email)</td>
                        <td className="py-3 px-3">Resposta ao pedido e gestão da inscrição</td>
                        <td className="py-3 px-3">Execução de contrato</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">Nome do praticante (filho/a)</td>
                        <td className="py-3 px-3">Identificação do aluno e gestão pedagógica</td>
                        <td className="py-3 px-3">Execução de contrato</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">Idade do praticante</td>
                        <td className="py-3 px-3">Adequação das aulas ao nível etário</td>
                        <td className="py-3 px-3">Execução de contrato</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm mt-2 text-gray-400">Não recolhemos dados bancários, documentos de identificação, nem qualquer dado que não seja estritamente necessário para prestar o serviço.</p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">3. Dados de menores</h3>
                <p>Quando os dados dizem respeito a crianças e jovens com menos de 16 anos, o seu tratamento só é lícito com o consentimento do encarregado de educação ou titular da responsabilidade parental.</p>
                <p>Ao preencheres o formulário de inscrição com dados do teu filho ou filha, estás a confirmar que tens legitimidade para o fazer e que consentes no tratamento desses dados para os fins descritos nesta política.</p>
                <p>Não utilizamos os dados de menores para qualquer finalidade que não seja a prestação do serviço contratado.</p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">4. Com quem partilhamos os dados</h3>
                <p>Os teus dados não são vendidos, alugados nem cedidos a terceiros para fins comerciais.</p>
                <p>Os dados são processados pelas seguintes ferramentas, estritamente necessárias para a gestão das inscrições:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Google Forms / Google LLC</strong> - recolha e armazenamento do formulário de inscrição. A Google actua como subcontratante e processa dados nos termos das suas políticas de privacidade, em conformidade com o RGPD.</li>
                </ul>
                <p className="text-sm text-gray-400">Não utilizamos ferramentas de analytics, pixels de publicidade, redes sociais integradas na página nem qualquer outra tecnologia de rastreamento.</p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">5. Durante quanto tempo guardamos os dados</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400">
                        <th className="py-2 px-3 font-semibold">Situação</th>
                        <th className="py-2 px-3 font-semibold">Prazo de conservação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      <tr>
                        <td className="py-3 px-3">Inscrição concretizada</td>
                        <td className="py-3 px-3">Duração da relação contratual + 5 anos (obrigação fiscal e contabilística)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">Pedido de informação sem inscrição</td>
                        <td className="py-3 px-3">6 meses após o último contacto</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">Cancelamento de inscrição</td>
                        <td className="py-3 px-3">30 dias após confirmação do cancelamento, salvo obrigação legal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">6. Os teus direitos</h3>
                <p>Ao abrigo do Regulamento Geral sobre a Protecção de Dados (RGPD), tens os seguintes direitos:</p>
                <ul className="space-y-2">
                  <li><strong>Acesso</strong> - Podes pedir-nos uma cópia dos dados que temos sobre ti.</li>
                  <li><strong>Rectificação</strong> - Podes pedir a correcção de dados incompletos ou incorrectos.</li>
                  <li><strong>Eliminação</strong> - Podes pedir a eliminação dos teus dados, salvo quando existir obrigação legal de conservação.</li>
                  <li><strong>Limitação</strong> - Podes pedir que limitemos o tratamento dos teus dados em determinadas circunstâncias.</li>
                  <li><strong>Portabilidade</strong> - Podes pedir os teus dados num formato estruturado e legível por máquina.</li>
                  <li><strong>Oposição</strong> - Podes opor-te ao tratamento dos teus dados para fins que não sejam a execução do serviço contratado.</li>
                </ul>
                <p className="text-sm bg-[#D4601A]/10 border border-[#D4601A]/20 p-3 rounded text-gray-300">
                  Para exercer qualquer destes direitos, contacta-nos por email em <a href={`mailto:${settings.email}`} className="text-[#D4601A] hover:underline">{settings.email}</a> ou por WhatsApp para <a href={`https://wa.me/${settings.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-[#D4601A] hover:underline">{settings.whatsapp}</a>. Respondemos no prazo máximo de 30 dias.
                </p>
                <p className="text-sm">
                  Se considerares que o tratamento dos teus dados viola o RGPD, tens o direito de apresentar reclamação à autoridade de controlo nacional: <strong>CNPD - Comissão Nacional de Protecção de Dados</strong> (www.cnpd.pt)
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">7. Cookies</h3>
                <p>Este site não utiliza cookies de rastreamento, analytics ou publicidade.</p>
                <p className="text-sm text-gray-400">Podem ser utilizados cookies técnicos estritamente necessários ao funcionamento da página (como preferências de sessão). Estes cookies não recolhem dados pessoais nem são partilhados com terceiros, e não requerem o teu consentimento ao abrigo da legislação aplicável.</p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">8. Segurança</h3>
                <p>Adoptamos medidas técnicas e organizativas adequadas para proteger os teus dados contra acesso não autorizado, perda ou destruição. Os dados recolhidos através do Google Forms são armazenados nos servidores da Google, protegidos pelas medidas de segurança dessa plataforma.</p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">9. Alterações a esta política</h3>
                <p>Podemos actualizar esta política quando necessário. A data de última actualização está indicada no topo do documento. Em caso de alterações relevantes, informamos os nossos clientes activos por email ou WhatsApp.</p>
              </section>

              <section className="space-y-3">
                <h3 className="text-lg font-bold text-white uppercase tracking-wide font-sans">10. Contacto</h3>
                <p>Para qualquer questão relacionada com esta política ou com o tratamento dos teus dados:</p>
                <div className="text-sm">
                  <p className="font-bold text-white">FormaT - Skate &amp; Comunidade</p>
                  <p>Email: {settings.email}</p>
                  <p>WhatsApp: {settings.whatsapp}</p>
                  <p>Castelo Branco, Portugal</p>
                </div>
              </section>

              <p className="text-xs text-gray-500 pt-4 border-t border-white/5">
                Esta política foi elaborada em conformidade com o Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho (RGPD) e a Lei n.º 58/2019 de 8 de agosto (lei de execução do RGPD em Portugal).
              </p>
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-[#111111]/50 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded font-bold text-sm uppercase tracking-wider transition-colors"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
