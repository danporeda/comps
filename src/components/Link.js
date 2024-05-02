import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500', 
    className, 
    to === currentPath && activeClassName);

  const handleClick = (event) => {
    if (event.metaKey || event.crtlKey) return;
    event.preventDefault();

    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;