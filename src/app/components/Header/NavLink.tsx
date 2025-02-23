import clsx from 'clsx';
import Link from 'next/link';
import styles from './NavLink.module.css';

export type NavLinkProps = {
  children: string;
  pathname: string;
  current?: boolean;
};

export const NavLink = ({ children, pathname, current }: NavLinkProps) => {
  return (
    <li>
      <Link
        className={clsx(styles.link, current && styles['current-page'])}
        href={pathname}
      >
        {children}
      </Link>
    </li>
  );
};
