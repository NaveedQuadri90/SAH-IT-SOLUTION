import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';
import type { Service } from '../types';
import Modal from './Modal';

const ServiceCard: React.FC<{ service: Service; onLearnMore: () => void }> = ({ service, onLearnMore }) => (
  <div className="group bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 flex flex-col items-start h-full transform transition-transform duration-300 hover:-translate-y-2">
    <div className="mb-4 bg-black/20 p-3 rounded-full">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
    <p className="text-slate-300 text-base flex-grow">{service.description}</p>
    <button
      onClick={onLearnMore}
      className="mt-4 text-pink-500 font-semibold hover:text-pink-400 transition-colors duration-300 self-start"
    >
      Learn More &rarr;
    </button>
  </div>
);

const Services: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="py-20 sm:py-28 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300">
              A comprehensive suite of services designed to empower businesses and individuals with cutting-edge solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={index} service={service} onLearnMore={() => handleOpenModal(service)} />
            ))}
          </div>
        </div>
      </section>
      {selectedService && (
        <Modal isOpen={modalOpen} onClose={handleCloseModal}>
          <div className="p-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-black/20 p-3 rounded-full">
                {selectedService.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
            </div>
            <p className="text-slate-300">{selectedService.detailedDescription}</p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Services;