import { Modal } from '@/app/components/Modal/Modal';
import { SignIn } from '../components/SignInPage/SignIn';
import { AuthProvider } from '../(server)/AuthProvider';

export default function Page() {
  return (
    <AuthProvider>
      <Modal>
        <SignIn />
      </Modal>
    </AuthProvider>
  );
}
