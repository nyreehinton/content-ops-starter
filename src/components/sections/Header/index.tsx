import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { Link, Action } from '../../atoms';
import ImageBlock from '../../blocks/ImageBlock';
import ChevronDownIcon from '../../svgs/chevron-down';
import CloseIcon from '../../svgs/close';
import MenuIcon from '../../svgs/menu';

interface HeaderLink {
    label?: string;
    altText?: string;
    url?: string;
    showIcon?: boolean;
    icon?: string;
    iconPosition?: string;
    style?: string;
    elementId?: string;
    type?: string;
    links?: HeaderLink[];
}

interface HeaderProps {
    colors?: string;
    styles?: {
        self?: {
            margin?: any;
            padding?: any;
        };
    };
    enableAnnotations?: boolean;
    __metadata?: {
        id?: string;
    };
    variant?: string;
    title?: string;
    logo?: any;
    primaryLinks?: HeaderLink[];
    secondaryLinks?: HeaderLink[];
}

interface HeaderVariantsProps extends HeaderProps {
    variant?: string;
}

interface HeaderLogoProps {
    title?: string;
    logo?: any;
    enableAnnotations?: boolean;
}

interface ListOfLinksProps {
    links?: HeaderLink[];
    inMobileMenu?: boolean;
    hasAnnotations?: boolean;
}

interface SubNavLinksProps {
    links?: HeaderLink[];
    hasAnnotations?: boolean;
    inMobileMenu?: boolean;
}

export default function Header(props: HeaderProps) {
    const { colors, styles = {}, enableAnnotations } = props;
    return (
        <header
            className={classNames(
                'sb-component',
                'sb-component-header',
                colors,
                'relative',
                'shadow-header',
                styles?.self?.margin ? mapStyles({ padding: styles?.self?.margin }) : undefined,
                styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : 'p-4',
                'z-50'
            )}
            {...(enableAnnotations && { 'data-sb-object-id': props?.__metadata?.id })}
        >
            <div className="max-w-7xl mx-auto">
                <Link href="#main" className="sr-only">
                    Skip to main content
                </Link>
                <HeaderVariants {...props} />
            </div>
        </header>
    );
}

function HeaderVariants(props: HeaderVariantsProps) {
    const { variant = 'logo-left-primary-nav-left', ...rest } = props;
    switch (variant) {
        case 'logo-left-primary-nav-centered':
            return <HeaderLogoLeftPrimaryCentered {...rest} />;
        case 'logo-left-primary-nav-right':
            return <HeaderLogoLeftPrimaryRight {...rest} />;
        case 'logo-centered-primary-nav-left':
            return <HeaderLogoCenteredPrimaryLeft {...rest} />;
        case 'logo-centered-primary-nav-centered':
            return <HeaderLogoCenteredPrimaryCentered {...rest} />;
        default:
            return <HeaderLogoLeftPrimaryLeft {...rest} />;
    }
}

function HeaderLogoLeftPrimaryLeft(props: HeaderProps) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], enableAnnotations } = props;
    return (
        <div className="flex items-center">
            <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && (
                <>
                    <div className="ml-auto lg:hidden">
                        <MobileMenu {...props} />
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full lg:ml-10">
                        {primaryLinks.length > 0 && (
                            <div className="flex-grow">
                                <ListOfLinks links={primaryLinks} hasAnnotations={enableAnnotations} />
                            </div>
                        )}
                        {secondaryLinks.length > 0 && (
                            <div className="flex-shrink-0 ml-10">
                                <ListOfLinks links={secondaryLinks} hasAnnotations={enableAnnotations} />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

function HeaderLogoLeftPrimaryCentered(props: HeaderProps) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], enableAnnotations } = props;
    return (
        <div className="flex items-center">
            <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && (
                <>
                    <div className="ml-auto lg:hidden">
                        <MobileMenu {...props} />
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-full lg:ml-10">
                        {primaryLinks.length > 0 && (
                            <div className="flex-grow text-center">
                                <ListOfLinks links={primaryLinks} hasAnnotations={enableAnnotations} />
                            </div>
                        )}
                        {secondaryLinks.length > 0 && (
                            <div className="flex-shrink-0 ml-10">
                                <ListOfLinks links={secondaryLinks} hasAnnotations={enableAnnotations} />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

function HeaderLogoLeftPrimaryRight(props: HeaderProps) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], enableAnnotations } = props;
    return (
        <div className="flex items-center">
            <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
            {(primaryLinks.length > 0 || secondaryLinks.length > 0) && (
                <>
                    <div className="ml-auto lg:hidden">
                        <MobileMenu {...props} />
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-end lg:w-full lg:ml-10">
                        {primaryLinks.length > 0 && (
                            <div className="flex-grow text-right">
                                <ListOfLinks links={primaryLinks} hasAnnotations={enableAnnotations} />
                            </div>
                        )}
                        {secondaryLinks.length > 0 && (
                            <div className="flex-shrink-0 ml-10">
                                <ListOfLinks links={secondaryLinks} hasAnnotations={enableAnnotations} />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

function HeaderLogoCenteredPrimaryLeft(props: HeaderProps) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], enableAnnotations } = props;
    return (
        <div className="flex items-center">
            <div className="lg:w-1/3">
                {primaryLinks.length > 0 && (
                    <div className="hidden lg:block">
                        <ListOfLinks links={primaryLinks} hasAnnotations={enableAnnotations} />
                    </div>
                )}
            </div>
            <div className="lg:w-1/3 lg:text-center">
                <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
            </div>
            <div className="ml-auto lg:w-1/3 lg:ml-0">
                <div className="lg:hidden">
                    <MobileMenu {...props} />
                </div>
                {secondaryLinks.length > 0 && (
                    <div className="hidden lg:block lg:text-right">
                        <ListOfLinks links={secondaryLinks} hasAnnotations={enableAnnotations} />
                    </div>
                )}
            </div>
        </div>
    );
}

function HeaderLogoCenteredPrimaryCentered(props: HeaderProps) {
    const { title, logo, primaryLinks = [], secondaryLinks = [], enableAnnotations } = props;
    return (
        <>
            <div className="flex items-center">
                <div className="lg:hidden">
                    <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
                </div>
                <div className="ml-auto lg:hidden">
                    <MobileMenu {...props} />
                </div>
            </div>
            <div className="hidden lg:block lg:text-center">
                <div className="flex-shrink-0 mb-4">
                    <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
                </div>
                {primaryLinks.length > 0 && <ListOfLinks links={primaryLinks} hasAnnotations={enableAnnotations} />}
                {secondaryLinks.length > 0 && (
                    <div className="mt-4">
                        <ListOfLinks links={secondaryLinks} hasAnnotations={enableAnnotations} />
                    </div>
                )}
            </div>
        </>
    );
}

function MobileMenu(props: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const openMobileMenu = () => {
        setIsMenuOpen(true);
        document.body.classList.add('overflow-hidden');
    };

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
    };

    useEffect(() => {
        const handleRouteChange = () => {
            document.body.classList.remove('overflow-hidden');
        };
        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router]);

    const { title, logo, primaryLinks = [], secondaryLinks = [], enableAnnotations } = props;
    return (
        <>
            <button aria-label="Open Menu" className="p-2 -m-2" onClick={openMobileMenu}>
                <MenuIcon className="fill-current h-6 w-6" />
            </button>
            <div
                className={classNames(
                    'fixed',
                    'inset-0',
                    'px-4',
                    'sm:px-8',
                    'py-5',
                    'overflow-y-auto',
                    'z-50',
                    isMenuOpen ? 'block' : 'hidden'
                )}
            >
                <div className="flex flex-col min-h-full">
                    <div className="flex items-center justify-between mb-10">
                        <SiteLogoLink title={title} logo={logo} enableAnnotations={enableAnnotations} />
                        <button aria-label="Close Menu" className="p-2 -m-2" onClick={closeMobileMenu}>
                            <CloseIcon className="fill-current h-6 w-6" />
                        </button>
                    </div>
                    {primaryLinks.length > 0 && (
                        <div className="flex-grow">
                            <ListOfLinks links={primaryLinks} inMobileMenu={true} hasAnnotations={enableAnnotations} />
                        </div>
                    )}
                    {secondaryLinks.length > 0 && (
                        <div className="mt-10">
                            <ListOfLinks links={secondaryLinks} inMobileMenu={true} hasAnnotations={enableAnnotations} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

function SiteLogoLink({ title, logo, enableAnnotations }: HeaderLogoProps) {
    if (!title && !logo) {
        return null;
    }
    return (
        <div className="flex-shrink-0">
            <Link href="/" aria-label={title} className="sb-header-logo flex items-center">
                {logo && <ImageBlock {...logo} className="max-h-12" {...(enableAnnotations && { 'data-sb-field-path': '.logo' })} />}
                {title && !logo && <span className="text-2xl">{title}</span>}
            </Link>
        </div>
    );
}

function ListOfLinks({ links = [], inMobileMenu = false, hasAnnotations }: ListOfLinksProps) {
    if (links.length === 0) {
        return null;
    }
    return (
        <ul className={classNames(inMobileMenu ? 'flex flex-col space-y-4' : 'flex items-center space-x-8')} data-sb-field-path=".primaryLinks">
            {links.map((link, index) => {
                if (!link.url && link.links?.length) {
                    return <LinkWithSubnav key={index} link={link} inMobileMenu={inMobileMenu} hasAnnotations={hasAnnotations} />;
                }
                return (
                    <li key={index}>
                        <Action
                            {...link}
                            className={classNames(inMobileMenu ? 'w-full justify-start' : 'text-sm')}
                            {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

function LinkWithSubnav({ link, inMobileMenu, hasAnnotations }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = () => {
            setIsOpen(false);
        };
        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, [router]);

    if (!link.links?.length) {
        return null;
    }
    return (
        <li className={classNames(inMobileMenu ? 'w-full' : 'relative')}>
            <button
                className={classNames(
                    'flex',
                    'items-center',
                    'text-sm',
                    inMobileMenu ? 'w-full justify-between' : 'space-x-1',
                    isOpen && !inMobileMenu ? 'sb-header-nav-link-active' : undefined
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span {...(hasAnnotations && { 'data-sb-field-path': '.label' })}>{link.label}</span>
                <ChevronDownIcon className={classNames('fill-current h-4 w-4', isOpen ? 'rotate-180' : undefined)} />
            </button>
            <div
                className={classNames(
                    'sb-header-nav-submenu',
                    inMobileMenu ? 'overflow-hidden' : 'absolute left-0 top-full min-w-[12rem] rounded-md shadow-lg',
                    isOpen ? 'block' : 'hidden'
                )}
            >
                <ListOfSubNavLinks links={link.links} hasAnnotations={hasAnnotations} inMobileMenu={inMobileMenu} />
            </div>
        </li>
    );
}

function ListOfSubNavLinks({ links = [], hasAnnotations, inMobileMenu = false }: SubNavLinksProps) {
    if (links.length === 0) {
        return null;
    }
    return (
        <ul
            className={classNames(
                'space-y-2',
                inMobileMenu ? 'pl-8 mt-2' : 'p-4'
            )}
            {...(hasAnnotations && { 'data-sb-field-path': '.links' })}
        >
            {links.map((link, index) => (
                <li key={index}>
                    <Action
                        {...link}
                        className={classNames(inMobileMenu ? 'w-full justify-start' : 'text-sm')}
                        {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })}
                    />
                </li>
            ))}
        </ul>
    );
}
