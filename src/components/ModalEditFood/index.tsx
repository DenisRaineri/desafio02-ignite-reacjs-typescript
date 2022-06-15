import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";
import { Ifood } from "../Food";

interface IFoodUpdate {
  name: string;
  image: string;
  price: string;
  description: string;
}

interface ModalEditFoodProps {
  isOpen: boolean;
  editingFood: Ifood;
  setIsOpen: () => void;
  handleUpdateFood: (data: IFoodUpdate) => void;
}

export default function ModalEditFood({
  setIsOpen,
  isOpen,
  handleUpdateFood,
  editingFood,
}: ModalEditFoodProps) {
  const handleSubmit = async (data: IFoodUpdate) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  const formRef = useRef(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
