import { Modal } from '@/app/components/Modal/Modal';
import { SignUp } from '../components/SignUpPage/SignUp';
import { AuthProvider } from '../(server)/AuthProvider';

export default function Page() {
  return (
    <AuthProvider>
      <Modal>
        <SignUp />
      </Modal>
    </AuthProvider>
  );
}
