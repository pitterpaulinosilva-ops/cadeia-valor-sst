import React from 'react';
import { BusinessIcon } from '@/components/icons/CustomIcons';
import '@/components/icons/CustomIcons.css';

interface BusinessProcessesProps {
  onProcessClick: (event: React.MouseEvent) => void;
}

const BusinessProcesses: React.FC<BusinessProcessesProps> = ({ onProcessClick }) => {
  return (
    <div className="business-processes process-section">
      <div className="section-title icon-container">
        <BusinessIcon size={40} className="custom-icon business-icon glow-effect" />
        Processos de Negócio
      </div>
      <div className="linear-flow flow-fill-width">
        <div className="process-box box-darker-orange" data-process-id="ciclo-leads"
             onClick={onProcessClick}>
          GERENCIAR CICLO DE VIDA DE LEADS
        </div>
        <div className="process-box box-darker-orange" data-process-id="vendas-seguranca-trabalho"
             onClick={onProcessClick}>
          GERENCIAR VENDAS SEGURANÇA NO TRABALHO
        </div>
        <div className="process-box" data-process-id="gerenciar-seguranca-trabalho"
             onClick={onProcessClick}>
          GERENCIAR SEGURANÇA NO TRABALHO
        </div>
      </div>
      <div className="full-width-parallel-process">
        <div className="process-box box-darker-orange" data-process-id="voz-cliente"
             onClick={onProcessClick}>
          GERENCIAR VOZ DO CLIENTE
        </div>
      </div>
    </div>
  );
};

export default BusinessProcesses;