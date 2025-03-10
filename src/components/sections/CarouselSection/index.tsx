import * as React from 'react';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { getComponent } from '../../components-registry';
import Section from '../Section';
import Badge from '../../atoms/Badge';
import TitleBlock from '../../blocks/TitleBlock';
import ChevronBigLeftIcon from '../../svgs/chevron-big-left';
import ChevronBigRightIcon from '../../svgs/chevron-big-right';

interface FeaturedItemProps {
    elementId?: string;
    title?: string;
    tagline?: string;
    subtitle?: string;
    text?: string;
    image?: any;
    actions?: any[];
    colors?: string;
    styles?: {
        self?: {
            flexDirection?: string;
            margin?: any;
            padding?: any;
            borderWidth?: number;
            borderStyle?: string;
            borderColor?: string;
            borderRadius?: string;
            textAlign?: string;
            justifyContent?: string;
        };
    };
    hasSectionTitle?: boolean;
    'data-sb-field-path'?: string;
}

interface CarouselSectionProps {
    elementId?: string;
    colors?: string;
    backgroundImage?: any;
    badge?: any;
    title?: any;
    subtitle?: string;
    items?: FeaturedItemProps[];
    variant?: string;
    styles?: {
        self?: any;
        subtitle?: any;
    };
    enableAnnotations?: boolean;
}

interface CarouselVariantsProps {
    variant?: string;
    items: FeaturedItemProps[];
    hasTopMargin: boolean;
    hasSectionTitle: boolean;
    hasAnnotations: boolean;
}

interface CarouselNavigationProps {
    items: FeaturedItemProps[];
    hasTopMargin: boolean;
    hasSectionTitle: boolean;
    hasAnnotations: boolean;
}

export default function CarouselSection(props: CarouselSectionProps) {
    const { elementId, colors, backgroundImage, badge, title, subtitle, items = [], variant, styles = {}, enableAnnotations } = props;
    const hasSectionTitle = !!title;

    return (
        <Section
            elementId={elementId}
            className="sb-component-carousel-section"
            colors={colors}
            backgroundImage={backgroundImage}
            styles={styles?.self}
            {...getDataAttrs(props)}
        >
            <div className={classNames('w-full', 'flex', 'flex-col', mapStyles({ alignItems: styles?.self?.justifyContent ?? 'flex-start' }))}>
                {badge && <Badge {...badge} className="w-full max-w-sectionBody" {...(enableAnnotations && { 'data-sb-field-path': '.badge' })} />}
                {title && (
                    <TitleBlock
                        {...title}
                        className={classNames('w-full', 'max-w-sectionBody', { 'mt-4': badge?.label })}
                        {...(enableAnnotations && { 'data-sb-field-path': '.title' })}
                    />
                )}
                {subtitle && (
                    <p
                        className={classNames(
                            'w-full',
                            'max-w-sectionBody',
                            'text-lg',
                            'sm:text-2xl',
                            styles?.subtitle ? mapStyles(styles?.subtitle) : undefined,
                            {
                                'mt-4': badge?.label || title?.text
                            }
                        )}
                        {...(enableAnnotations && { 'data-sb-field-path': '.subtitle' })}
                    >
                        {subtitle}
                    </p>
                )}
                {items.length > 0 && (
                    <CarouselVariants
                        variant={variant}
                        items={items}
                        hasTopMargin={!!(badge?.label || title?.text || subtitle)}
                        hasSectionTitle={hasSectionTitle}
                        hasAnnotations={!!enableAnnotations}
                    />
                )}
            </div>
        </Section>
    );
}

function CarouselVariants(props: CarouselVariantsProps) {
    const { variant = 'next-prev-nav', ...rest } = props;
    switch (variant) {
        case 'dots-nav':
            return <CarouselWithPagination {...rest} />;
        case 'tabs-nav':
            return <CarouselWithTabs {...rest} />;
        case 'next-prev-nav-multiple':
            return <CarouselMultipleWithNavigation {...rest} />;
        default:
            return <CarouselWithNavigation {...rest} />;
    }
}

function CarouselWithNavigation({ items = [], hasTopMargin, hasSectionTitle, hasAnnotations }: CarouselNavigationProps) {
    const FeaturedItem = getComponent('FeaturedItem');
    const [swiperRef, setSwiperRef] = React.useState<SwiperClass>();

    return (
        <div className={classNames('w-full', 'relative', { 'mt-12': hasTopMargin })} {...(hasAnnotations && { 'data-sb-field-path': '.items' })}>
            <Swiper effect={'fade'} fadeEffect={{ crossFade: true }} speed={500} loop={true} autoHeight={true} modules={[EffectFade]} onSwiper={setSwiperRef}>
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full max-w-5xl mx-auto">
                            <FeaturedItem {...item} hasSectionTitle={hasSectionTitle} {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={classNames('sb-carousel-nav', items.length > 1 ? 'flex justify-center mt-8 xl:mt-0' : 'hidden')}>
                <button
                    className="inline-flex items-center justify-center w-10 h-10 mx-2 rounded-full cursor-pointer sb-carousel-prev xl:absolute xl:left-0 xl:top-1/2 xl:-translate-y-1/2 xl:z-50"
                    aria-label="Previous"
                    onClick={() => {
                        swiperRef?.slidePrev();
                    }}
                >
                    <ChevronBigLeftIcon className="w-6 h-6 fill-current" />
                </button>
                <button
                    className="inline-flex items-center justify-center w-10 h-10 mx-2 rounded-full cursor-pointer sb-carousel-next xl:absolute xl:right-0 xl:top-1/2 xl:-translate-y-1/2 xl:z-50"
                    aria-label="Next"
                    onClick={() => {
                        swiperRef?.slideNext();
                    }}
                >
                    <ChevronBigRightIcon className="w-6 h-6 fill-current" />
                </button>
            </div>
        </div>
    );
}

function CarouselMultipleWithNavigation({ items = [], hasTopMargin, hasSectionTitle, hasAnnotations }: { items: FeaturedItemProps[], hasTopMargin: boolean, hasSectionTitle: boolean, hasAnnotations: boolean }) {
    const FeaturedItem = getComponent('FeaturedItem');
    const [swiperRef, setSwiperRef] = React.useState<SwiperClass>();
    const itemsTotal = items.length;
    const itemsPerView = Math.floor(itemsTotal / 2);

    return (
        <div className={classNames('w-full', 'relative', { 'mt-12': hasTopMargin })} {...(hasAnnotations && { 'data-sb-field-path': '.items' })}>
            <Swiper
                spaceBetween={40}
                slidesPerView={1}
                speed={500}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: itemsPerView > 1 ? 2 : 1 },
                    768: { slidesPerView: itemsPerView > 1 ? itemsPerView : 1 }
                }}
                onSwiper={setSwiperRef}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full">
                            <FeaturedItem {...item} hasSectionTitle={hasSectionTitle} {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={classNames('sb-carousel-nav', itemsTotal > 1 ? 'flex justify-center gap-4 mt-8' : 'hidden')}>
                <button
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full cursor-pointer sb-carousel-prev"
                    aria-label="Previous"
                    onClick={() => {
                        swiperRef?.slidePrev();
                    }}
                >
                    <ChevronBigLeftIcon className="w-6 h-6 fill-current" />
                </button>
                <button
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full cursor-pointer sb-carousel-next"
                    aria-label="Next"
                    onClick={() => {
                        swiperRef?.slideNext();
                    }}
                >
                    <ChevronBigRightIcon className="w-6 h-6 fill-current" />
                </button>
            </div>
        </div>
    );
}

function CarouselWithPagination({ items = [], hasTopMargin, hasSectionTitle, hasAnnotations }: CarouselNavigationProps) {
    const FeaturedItem = getComponent('FeaturedItem');
    const [swiperRef, setSwiperRef] = React.useState<SwiperClass>();

    return (
        <div className={classNames('w-full', 'relative', { 'mt-12': hasTopMargin })} {...(hasAnnotations && { 'data-sb-field-path': '.items' })}>
            <Swiper effect={'fade'} fadeEffect={{ crossFade: true }} speed={500} loop={true} autoHeight={true} modules={[EffectFade]} onSwiper={setSwiperRef}>
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full max-w-5xl mx-auto">
                            <FeaturedItem {...item} hasSectionTitle={hasSectionTitle} {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

function CarouselWithTabs({ items = [], hasTopMargin, hasSectionTitle, hasAnnotations }: CarouselNavigationProps) {
    const FeaturedItem = getComponent('FeaturedItem');
    const [swiperRef, setSwiperRef] = React.useState<SwiperClass>();

    return (
        <div className={classNames('w-full', 'relative', { 'mt-12': hasTopMargin })} {...(hasAnnotations && { 'data-sb-field-path': '.items' })}>
            <Swiper effect={'fade'} fadeEffect={{ crossFade: true }} speed={500} loop={true} autoHeight={true} modules={[EffectFade]} onSwiper={setSwiperRef}>
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full max-w-5xl mx-auto">
                            <FeaturedItem {...item} hasSectionTitle={hasSectionTitle} {...(hasAnnotations && { 'data-sb-field-path': `.${index}` })} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
