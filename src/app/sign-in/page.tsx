import { AuthProvider } from '../components/AuthProvider';
import { Modal } from '../components/Modal/Modal';
import { SignIn } from '../components/SignInPage/SignIn';

export default function Page() {
  return (
    <AuthProvider>
      <Modal>
        <SignIn />
      </Modal>
    </AuthProvider>
  );
}
