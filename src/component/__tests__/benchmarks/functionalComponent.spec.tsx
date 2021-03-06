import { render } from '../../../DOM/rendering';
import * as Inferno from '../../../testUtils/inferno';
Inferno; // suppress ts 'never used' error

function runBenchmark(container) {
	let Link0 = function() {
		return <a href={'/'} className={'_5ljn'} rel={undefined} onClick={function () { } }/>;
	};

	let ReactImage1 = function() {
		return <i alt={''} className={'_3-99 img sp_UuU9HmrQ397 sx_7e56e9'} src={null}/>;
	};

	let Link2 = function() {
		return (
			<a style={{ maxWidth: '200px' }} image={null} label={null} imageRight={{}} className={'_387r _55pi _2agf _387r _55pi _4jy0 _4jy3 _517h _51sy _42ft'} href={'#'} haschevron={true}
				 onClick={function () { } } onToggle={function () { } } size={'medium'} use={'default'} borderShade={'light'} suppressed={false} disabled={null} rel={undefined}>
				{null}
				<span className={'_55pe'} style={{ maxWidth: '186px' }}>
					{null}
					{'Dick Madanson (10149999073643408)'}
				</span>
				<ReactImage1 />
			</a>
		);
	};

	let AbstractButton3 = function() {
		return <Link2 />;
	};

	let XUIButton4 = function() {
		return <AbstractButton3 />;
	};

	let AbstractPopoverButton5 = function() {
		return <XUIButton4 />;
	};

	let ReactXUIPopoverButton6 = function() {
		return <AbstractPopoverButton5 />;
	};

	let AdsPEAccountSelector7 = function() {
		return <ReactXUIPopoverButton6 />;
	};

	let AdsPEAccountSelectorContainer8 = function() {
		return <AdsPEAccountSelector7 />;
	};

	let AbstractButton9 = function() {
		return (
			<button id={'downloadButton'} className={'_5lk0 _4jy0 _4jy3 _517h _51sy _42ft'} label={null} onClick={function () { } } use={'default'} size={'medium'} borderShade={'light'} suppressed={false}
							type='submit' value={'1'}>
				{undefined}
				{'Download to Power Editor'}
				{undefined}
			</button>
		);
	};

	let XUIButton10 = function() {
		return <AbstractButton9 />;
	};

	let DownloadUploadTimestamp11 = function() {
		return (
			<div>
				{'Last downloaded'}
				{' '}
				<abbr className={'livetimestamp'} data-utime={1446062352} data-shorten={false}>{'a few seconds ago'}</abbr>
			</div>
		);
	};

	let ReactImage12 = function() {
		return <i alt={''} className={'_3-8_ img sp_UuU9HmrQ397 sx_dbc06a'} src={null}/>;
	};

	let AbstractButton13 = function() {
		return (
			<button id={'uploadButton'} className={'_5lk0 _4jy0 _4jy3 _517h _51sy _42ft'} image={{}} use={'default'} label={null} onClick={function () { } } size={'medium'} borderShade={'light'}
							suppressed={false} type='submit' value={'1'}>
				<ReactImage12 />
				{'Upload Changes'}
				{undefined}
			</button>
		);
	};

	let XUIButton14 = function() {
		return <AbstractButton13 />;
	};

	let DownloadUploadTimestamp15 = function() {
		return <div></div>;
	};

	let AbstractButton16 = function() {
		return (
			<button className={'_5ljz _4jy0 _4jy3 _517h _51sy _42ft'} label={null} onClick={function () { } } use={'default'} size={'medium'} borderShade={'light'} suppressed={false} type='submit'
							value={'1'}>
				{undefined}
				{'Help'}
				{undefined}
			</button>
		);
	};

	let XUIButton17 = function() {
		return <AbstractButton16 />;
	};

	let ReactImage18 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_d5a685'}/>;
	};

	let AbstractButton19 = function() {
		return (
			<button className={'_5ljw _p _4jy0 _4jy3 _517h _51sy _42ft'} image={{}} use={'default'} size={'medium'} borderShade={'light'} suppressed={false} label={null} type='submit' value={'1'}>
				<ReactImage18 />
				{undefined}
				{undefined}
			</button>
		);
	};

	let XUIButton20 = function() {
		return <AbstractButton19 />;
	};

	let InlineBlock21 = function() {
		return (
			<div className={'_5ljz uiPopover _6a _6b'} alignh={'right'} menu={{}} alignv={'middle'} disabled={null} fullWidth={false}>
				<XUIButton20 key={'/.0'}/>
			</div>
		);
	};

	let ReactPopoverMenu22 = function() {
		return <InlineBlock21 />;
	};

	let XUIButtonGroup23 = function() {
		return (
			<div className={'_13xj _51xa'} id={'helpButton'}>
				<XUIButton17 />
				<ReactPopoverMenu22 />
			</div>
		);
	};

	let AdsPEResetDialog24 = function() {
		return <span/>;
	};

	let AdsPETopNav25 = function() {
		return (
			<div className={'_5ljl'} id={'ads_pe_top_nav'}>
				<div className={'_5ljm'}>
					<Link0 />
					<div className={'_5rne'}>
						<span className={'_5ljs'} data-testid={'PETopNavLogoText'}>{'Power Editor'}</span>
					</div>
					<span className={'_5ljt _5lju'}>{'Dick Madanson'}</span>
				</div>
				<div className={'_5ljy'}>
					<div className={'_5ljz _5mun'}>
						<AdsPEAccountSelectorContainer8 />
						<div className={'_5lj- _5lju'}>{'Account 10149999073643408'}</div>
					</div>
					<div className={'_5ljz'}>
						<div className={'_5lj_'}>
							<XUIButton10 />
						</div>
						<div className={'_5lj- _5lju'}>
							<DownloadUploadTimestamp11 />
						</div>
					</div>
					<div className={'_5ljz'}>
						<div className={'_5lj_'}>
							<XUIButton14 />
						</div>
						<div className={'_5lj- _5lju'}>
							<DownloadUploadTimestamp15 />
						</div>
					</div>
				</div>
				<div className={'_5lk3'}>
					<XUIButtonGroup23 />
				</div>
				<AdsPEResetDialog24 />
			</div>
		);
	};

	let FluxContainer_ja_26 = function() {
		return <AdsPETopNav25 />;
	};

	let Wrapper27 = function() {
		return (
			<li selected={true} focused={false} tabIndex={null} hideFocusRing={true} onClick={function () { } } onMouseDown={function () { } } onFocus={function () { } } onBlur={function () { } }
					className={'_5vwz _5vwy _45hc _1hqh'} wrapper={function () { } } shouldWrapTab={true} mockSpacebarClick={true} role={'presentation'}>
				<a aria-selected={true} onKeyDown={function () { } }>
					<div className={'_4jq5'}>{'Manage Ads'}</div>
					<span className={'_13xf'}/>
				</a>
			</li>
		);
	};

	let TabBarItem28 = function() {
		return <Wrapper27 />;
	};

	let XUIPageNavigationItem29 = function() {
		return <TabBarItem28 />;
	};

	let TabBarItemWrapper30 = function() {
		return <XUIPageNavigationItem29 key={'MANAGE_ADS'}/>;
	};

	let Wrapper31 = function() {
		return (
			<li selected={false} focused={false} tabIndex={null} hideFocusRing={true} onClick={function() {
			} } onMouseDown={function() {
			} } onFocus={function() {
			} } onBlur={function() {
			} }
				className={'_5vwz _45hc'} wrapper={function() {
			} } shouldWrapTab={true} mockSpacebarClick={true} role={'presentation'}>
			<a aria-selected={false} onKeyDown={function () { } }>
				<div className={'_4jq5'}>{'Audiences'}</div>
				<span className={'_13xf'}/>
			</a>
			</li>
		);
	};

	let TabBarItem32 = function() {
		return <Wrapper31 />;
	};

	let XUIPageNavigationItem33 = function() {
		return <TabBarItem32 />;
	};

	let TabBarItemWrapper34 = function() {
		return <XUIPageNavigationItem33 key={'AUDIENCES'}/>;
	};

	let Wrapper35 = function() {
		return (
			<li selected={false} focused={false} tabIndex={null} hideFocusRing={true} onClick={function () { } } onMouseDown={function () { } } onFocus={function () { } } onBlur={function () { } }
					className={'_5vwz _45hc'} wrapper={function () { } } shouldWrapTab={true} mockSpacebarClick={true} role={'presentation'}>
				<a aria-selected={false} onKeyDown={function () { } }>
					<div className={'_4jq5'}>{'Image Library'}</div>
					<span className={'_13xf'}/>
				</a>
			</li>
		);
	};

	let TabBarItem36 = function() {
		return <Wrapper35 />;
	};

	let XUIPageNavigationItem37 = function() {
		return <TabBarItem36 />;
	};

	let TabBarItemWrapper38 = function() {
		return <XUIPageNavigationItem37 key={'IMAGES'}/>;
	};

	let Wrapper39 = function() {
		return (
			<li selected={false} focused={false} tabIndex={null} hideFocusRing={true} onClick={function () { } } onMouseDown={function () { } } onFocus={function () { } } onBlur={function () { } }
					className={'_5vwz _45hc'} wrapper={function () { } } shouldWrapTab={true} mockSpacebarClick={true} role={'presentation'}>
				<a aria-selected={false} onKeyDown={function () { } }>
					<div className={'_4jq5'}>
						{'Reporting'}
						{null}
					</div>
					<span className={'_13xf'}/>
				</a>
			</li>
		);
	};

	let TabBarItem40 = function() {
		return <Wrapper39 />;
	};

	let XUIPageNavigationItem41 = function() {
		return <TabBarItem40 />;
	};

	let TabBarItemWrapper42 = function() {
		return <XUIPageNavigationItem41 key={'REPORTING'}/>;
	};

	let Wrapper43 = function() {
		return (
			<li selected={false} focused={false} tabIndex={null} hideFocusRing={true} onClick={function () { } } onMouseDown={function () { } } onFocus={function () { } } onBlur={function () { } }
					className={'_5vwz _45hc'} wrapper={function () { } } shouldWrapTab={true} mockSpacebarClick={true} role={'presentation'}>
				<a aria-selected={false} onKeyDown={function () { } }>
					<div className={'_4jq5'}>{'Page Posts'}</div>
					<span className={'_13xf'}/>
				</a>
			</li>
		);
	};

	let TabBarItem44 = function() {
		return <Wrapper43 />;
	};

	let XUIPageNavigationItem45 = function() {
		return <TabBarItem44 />;
	};

	let TabBarItemWrapper46 = function() {
		return <XUIPageNavigationItem45 key={'PAGES'}/>;
	};

	let TabBarItem47 = function() {
		return (
			<a aria-selected={false}>
				<span className={'_1b0'}>
					{'Tools'}
					<span className={'accessible_elem'}>{'additional tabs menu'}</span>
				</span>
			</a>
		);
	};

	let InlineBlock48 = function() {
		return (
			<div menu={{}} layerBehaviors={{}} alignv={'middle'} className={'uiPopover _6a _6b'} disabled={null} fullWidth={false}>
				<TabBarItem47 key={'/.0'}/>
			</div>
		);
	};

	let ReactPopoverMenu49 = function() {
		return <InlineBlock48 />;
	};

	let TabBarDropdownItem50 = function() {
		return (
			<li className={' _45hd'} role={'tab'}>
				<ReactPopoverMenu49 />
			</li>
		);
	};

	let TabBar51 = function() {
		return (
			<ul onTabClick={function () { } } activeTabKey={'MANAGE_ADS'} onWidthCalculated={function () { } } width={null} maxTabsVisible={5} moreLabel={'Tools'} alwaysShowActive={true}
					dropdownTabComponent={function () { } } shouldCalculateVisibleTabs={true} className={'_43o4'} role={'tablist'} onKeyDown={function () { } } onKeyUp={function () { } }>
				<TabBarItemWrapper30 key={'MANAGE_ADS'}/>
				<TabBarItemWrapper34 key={'AUDIENCES'}/>
				<TabBarItemWrapper38 key={'IMAGES'}/>
				<TabBarItemWrapper42 key={'REPORTING'}/>
				<TabBarItemWrapper46 key={'PAGES'}/>
				<TabBarDropdownItem50 key={'_dropdown'}/>
			</ul>
		);
	};

	let XUIPageNavigationGroup52 = function() {
		return <TabBar51 />;
	};

	let LeftRight53 = function() {
		return (
			<div className={'_5vx7 clearfix'}>
				<div key={'left'} className={'_ohe lfloat'}>
					<XUIPageNavigationGroup52 key={'0'}/>
				</div>
				{null}
			</div>
		);
	};

	let XUIPageNavigation54 = function() {
		return (
			<div className={'_5vx2 _5vx4 _5vx6 _5kkt'}>
				<LeftRight53 />
			</div>
		);
	};

	let AdsPENavigationBar55 = function() {
		return (
			<div className={'_5_a'} id={'ads_pe_navigation_bar'}>
				<XUIPageNavigation54 />
			</div>
		);
	};

	let FluxContainer_w_56 = function() {
		return <AdsPENavigationBar55 />;
	};

	let ReactImage57 = function() {
		return (
			<i alt={'Warning'} className={'_585p img sp_R48dKBxiJkP sx_aed870'} src={null}>
				<u>{'Warning'}</u>
			</i>
		);
	};

	let Link58 = function() {
		return (
			<a className={'_585q _50zy _50-0 _50z- _5upp _42ft'} href={'#'} onClick={function () { } } size={'medium'} shade={'dark'} type={null} label={null} title={'Remove'} aria-label={undefined}
				 data-hover={undefined} data-tooltip-alignh={undefined} disabled={null} rel={undefined}>
				{undefined}
				{'Remove'}
				{undefined}
			</a>
		);
	};

	let AbstractButton59 = function() {
		return <Link58 />;
	};

	let XUIAbstractGlyphButton60 = function() {
		return <AbstractButton59 />;
	};

	let XUICloseButton61 = function() {
		return <XUIAbstractGlyphButton60 />;
	};

	let XUIText62 = function() {
		return <span weight={'bold'} size={'inherit'} display={'inline'} className={' _50f7'}>{'Ads Manager'}</span>;
	};

	let Link63 = function() {
		return (
			<a href={'/ads/manage/billing.php?act=10149999073643408'} target={'_blank'} rel={undefined} onClick={function () { } }>
				<XUIText62 />
			</a>
		);
	};

	let XUINotice64 = function() {
		return (
			<div size={'medium'} className={'_585n _585o _2wdd'}>
				<ReactImage57 />
				<XUICloseButton61 />
				<div className={'_585r _2i-a _50f4'}>
					{'Please go to '}
					<Link63 />
					{' to set up a payment method for this ad account.'}
				</div>
			</div>
		);
	};

	let ReactCSSTransitionGroupChild65 = function() {
		return <XUINotice64 />;
	};

	let ReactTransitionGroup66 = function() {
		return (
			<span transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionName={{}} transitionAppear={false} transitionEnter={true} transitionLeave={true} childFactory={function() {
			} }
				component={'span'}>
				<ReactCSSTransitionGroupChild65 key={'.0'}/>
			</span>
		);
	};

	let ReactCSSTransitionGroup67 = function() {
		return <ReactTransitionGroup66 />;
	};

	let AdsPETopError68 = function() {
		return (
			<div className={'_2wdc'}>
				<ReactCSSTransitionGroup67 />
			</div>
		);
	};

	let FluxContainer_r_69 = function() {
		return <AdsPETopError68 />;
	};

	let ReactImage70 = function() {
		return <i className={'_3-8_ img sp_UuU9HmrQ397 sx_bae57d'} src={null}></i>;
	};

	let ReactImage71 = function() {
		return <i alt={''} className={'_3-99 img sp_UuU9HmrQ397 sx_7e56e9'} src={null}></i>;
	};

	let Link72 = function() {
		return (
			<a style={{ maxWidth: '200px' }} image={null} label={null} imageRight={{}} className={' _5bbf _55pi _2agf  _5bbf _55pi _4jy0 _4jy4 _517h _51sy _42ft'} href={'#'} haschevron={true}
				onClick={function() {
			} } size={'large'} use={'default'} borderShade={'light'} suppressed={false} disabled={null} rel={undefined}>
				{null}
			<span className={'_55pe'} style={{ maxWidth: '186px' }}>
					<ReactImage70 />
				{'Search'}
				</span>
			<ReactImage71 />
			</a>
		);
	};

	let AbstractButton73 = function() {
		return <Link72 />;
	};

	let XUIButton74 = function() {
		return <AbstractButton73 />;
	};

	let AbstractPopoverButton75 = function() {
		return <XUIButton74 />;
	};

	let ReactXUIPopoverButton76 = function() {
		return <AbstractPopoverButton75 />;
	};

	let ReactImage77 = function() {
		return <i className={'_3-8_ img sp_UuU9HmrQ397 sx_81d5f0'} src={null}></i>;
	};

	let ReactImage78 = function() {
		return <i alt={''} className={'_3-99 img sp_UuU9HmrQ397 sx_7e56e9'} src={null}></i>;
	};

	let Link79 = function() {
		return (
			<a style={{ maxWidth: '200px' }} image={null} label={null} imageRight={{}} className={' _5bbf _55pi _2agf  _5bbf _55pi _4jy0 _4jy4 _517h _51sy _42ft'} href={'#'} haschevron={true}
				 onClick={function () { } } size={'large'} use={'default'} borderShade={'light'} suppressed={false} disabled={null} rel={undefined}>
				{null}
				<span className={'_55pe'} style={{ maxWidth: '186px' }}>
					<ReactImage77 />
					{'Filters'}
				</span>
				<ReactImage78 />
			</a>
		);
	};

	let AbstractButton80 = function() {
		return <Link79 />;
	};

	let XUIButton81 = function() {
		return <AbstractButton80 />;
	};

	let AbstractPopoverButton82 = function() {
		return <XUIButton81 />;
	};

	let ReactXUIPopoverButton83 = function() {
		return <AbstractPopoverButton82 />;
	};

	let AdsPEFiltersPopover84 = function() {
		return (
			<span className={'_5b-l  _5bbe'}>
				<ReactXUIPopoverButton76 />
				<ReactXUIPopoverButton83 />
			</span>
		);
	};

	let ReactImage85 = function() {
		return <i className={'_3yz6 _5whs img sp_UuU9HmrQ397 sx_5fe5c2'} src={null}></i>;
	};

	let AbstractButton86 = function() {
		return (
			<button className={'_3yz9 _1t-2 _50z_ _50zy _50zz _50z- _5upp _42ft'} size={'small'} onClick={function () { } } shade={'dark'} type={'button'} label={null} title={'Remove'}
							aria-label={undefined} data-hover={undefined} data-tooltip-alignh={undefined}>
				{undefined}
				{'Remove'}
				{undefined}
			</button>
		);
	};

	let XUIAbstractGlyphButton87 = function() {
		return <AbstractButton86 />;
	};

	let XUICloseButton88 = function() {
		return <XUIAbstractGlyphButton87 />;
	};

	let ReactImage89 = function() {
		return <i className={'_5b5p _4gem img sp_UuU9HmrQ397 sx_5fe5c2'} src={null}></i>;
	};

	let ReactImage90 = function() {
		return <i src={null} className={'_541d img sp_R48dKBxiJkP sx_dc2cdb'}></i>;
	};

	let AdsPopoverLink91 = function() {
		return (
			<span onMouseEnter={function () { } } onMouseLeave={function () { } }>
				<span className={'_3o_j'}></span>
				<ReactImage90 />
			</span>
		);
	};

	let AdsHelpLink92 = function() {
		return <AdsPopoverLink91 />;
	};

	let AbstractButton93 = function() {
		return (
			<button className={'_5b5u _5b5v _4jy0 _4jy3 _517h _51sy _42ft'} label={null} use={'default'} onClick={function () { } } size={'medium'} borderShade={'light'} suppressed={false} type='submit'
							value={'1'}>
				{undefined}
				{'Apply'}
				{undefined}
			</button>
		);
	};

	let XUIButton94 = function() {
		return <AbstractButton93 />;
	};

	let BUIFilterTokenInput95 = function() {
		return (
			<div className={'_5b5o _3yz3 _4cld'}>
				<div className={'_5b5t _2d2k'}>
					<ReactImage89 />
					<div className={'_5b5r'}>
						{'Ads: (1)'}
						<AdsHelpLink92 />
					</div>
				</div>
				<XUIButton94 />
			</div>
		);
	};

	let BUIFilterToken96 = function() {
		return (
			<div className={'_3yz1 _3yz2 _3dad'}>
				<div aria-hidden={false}>
					<div onClick={function () { } } className={'_3yz5'}>
						<ReactImage85 />
						<div className={'_3yz7'}>{'Ads:'}</div>
						<div className={'ellipsis _3yz8'} data-hover={'tooltip'} data-tooltip-display={'overflow'}>{'(1)'}</div>
					</div>
					<XUICloseButton88 />
				</div>
				<BUIFilterTokenInput95 />
			</div>
		);
	};

	let ReactImage97 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_158e8d'}></i>;
	};

	let AbstractButton98 = function() {
		return (
			<button className={'_1wdf _4jy0 _517i _517h _51sy _42ft'} size={'small'} onClick={function () { } } image={{}} use={'default'} borderShade={'light'} suppressed={false} label={null}
							type='submit' value={'1'}>
				<ReactImage97 />
				{undefined}
				{undefined}
			</button>
		);
	};

	let XUIButton99 = function() {
		return <AbstractButton98 />;
	};

	let BUIFilterTokenCreateButton100 = function() {
		return (
			<div className={'_1tc'}>
				<XUIButton99 />
			</div>
		);
	};

	let BUIFilterTokenizer101 = function() {
		return (
			<div className={'_5b-m _3o1v clearfix'}>
				{undefined}
				{[]}
				<BUIFilterToken96 key={'token0'}/>
				<BUIFilterTokenCreateButton100 />
				{null}
				<div className={'_49u3'}></div>
			</div>
		);
	};

	let AdsPEAmbientNUXMegaphone102 = function() {
		return <span></span>;
	};

	let AdsPEFilters103 = function() {
		return (
			<div className={'_4rw_'}>
				<AdsPEFiltersPopover84 />
				{null}
				<BUIFilterTokenizer101 />
				{''}
				<AdsPEAmbientNUXMegaphone102 />
			</div>
		);
	};

	let AdsPEFilterContainer104 = function() {
		return <AdsPEFilters103 />;
	};

	let AdsPECampaignTimeLimitNotice105 = function() {
		return <div></div>;
	};

	let AdsPECampaignTimeLimitNoticeContainer106 = function() {
		return <AdsPECampaignTimeLimitNotice105 />;
	};

	let AdsPETablePager107 = function() {
		return null;
	};

	let AdsPEAdgroupTablePagerContainer108 = function() {
		return <AdsPETablePager107 />;
	};

	let AdsPETablePagerContainer109 = function() {
		return <AdsPEAdgroupTablePagerContainer108 />;
	};

	let ReactImage110 = function() {
		return <i alt={''} className={'_3-99 img sp_UuU9HmrQ397 sx_132804'} src={null}></i>;
	};

	let Link111 = function() {
		return (
			<a style={{ maxWidth: '200px' }} image={null} label={null} imageRight={{}} className={'_55pi _2agf _55pi _4jy0 _4jy4 _517h _51sy _42ft'} href={'#'} disabled={null} maxwidth={undefined}
				 size={'large'} suppressed={false} chevron={{}} use={'default'} borderShade={'light'} onClick={function () { } } rel={undefined}>
				{null}
				<span className={'_55pe'} style={{ maxWidth: '186px' }}>
					{null}
					{'Lifetime'}
				</span>
				<ReactImage110 />
			</a>
		);
	};

	let AbstractButton112 = function() {
		return <Link111 />;
	};

	let XUIButton113 = function() {
		return <AbstractButton112 />;
	};

	let AbstractPopoverButton114 = function() {
		return <XUIButton113 />;
	};

	let ReactXUIPopoverButton115 = function() {
		return <AbstractPopoverButton114 />;
	};

	let XUISingleSelectorButton116 = function() {
		return <ReactXUIPopoverButton115 />;
	};

	let InlineBlock117 = function() {
		return (
			<div className={'_3c5o _3c5p _6a _6b'} defaultValue={'LIFETIME'} size={'large'} onChange={function () { } } disabled={false} alignv={'middle'} fullWidth={false}>
				<input type={'hidden'} autoComplete={'off'} name={undefined} value={'LIFETIME'}/>
				<XUISingleSelectorButton116 />
			</div>
		);
	};

	let XUISingleSelector118 = function() {
		return <InlineBlock117 />;
	};

	let ReactImage119 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_6c732d'}/>;
	};

	let AbstractButton120 = function() {
		return (
			<button aria-label={'List Settings'} className={'_u_k _3c5o _1-r0 _4jy0 _4jy4 _517h _51sy _42ft'} data-hover={'tooltip'} image={{}} size={'large'} onClick={function () { } } use={'default'}
							borderShade={'light'} suppressed={false} label={null} type='submit' value={'1'}>
				<ReactImage119 />
				{undefined}
				{undefined}
			</button>
		);
	};

	let XUIButton121 = function() {
		return <AbstractButton120 />;
	};

	let AdsPEStatRange122 = function() {
		return (
			<div className={'_3c5k'}>
				<span className={'_3c5j'}>{'Stats:'}</span>
				<span className={'_3c5l'}>
					<XUISingleSelector118 key={'range'}/>
					{null}
					<XUIButton121 key={'settings'}/>
				</span>
			</div>
		);
	};

	let AdsPEStatRangeContainer123 = function() {
		return <AdsPEStatRange122 />;
	};

	let Column124 = function() {
		return (
			<div className={'_4bl8 _4bl7'}>
				<div className={'_3c5f'}>
					{null}
					<AdsPETablePagerContainer109 />
					<div className={'_3c5i'}></div>
					<AdsPEStatRangeContainer123 />
				</div>
			</div>
		);
	};

	let ReactImage125 = function() {
		return <i alt={''} className={'_3-8_ img sp_UuU9HmrQ397 sx_158e8d'} src={null}/>;
	};

	let AbstractButton126 = function() {
		return (
			<button className={'_u_k _4jy0 _4jy4 _517h _51sy _42ft'} label={null} size={'large'} onClick={function () { } } image={{}} use={'default'} borderShade={'light'} suppressed={false}
							type='submit' value={'1'}>
				<ReactImage125 />
				{'Create Ad'}
				{undefined}
			</button>
		);
	};

	let XUIButton127 = function() {
		return <AbstractButton126 />;
	};

	let ReactImage128 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_d5a685'}/>;
	};

	let AbstractButton129 = function() {
		return (
			<button className={'_u_k _p _4jy0 _4jy4 _517h _51sy _42ft'} image={{}} size={'large'} use={'default'} borderShade={'light'} suppressed={false} label={null} type='submit' value={'1'}>
				<ReactImage128 />
				{undefined}
				{undefined}
			</button>
		);
	};

	let XUIButton130 = function() {
		return <AbstractButton129 />;
	};

	let InlineBlock131 = function() {
		return (
			<div menu={{}} alignh={'right'} layerBehaviors={{}} alignv={'middle'} className={'uiPopover _6a _6b'} disabled={null} fullWidth={false}>
				<XUIButton130 key={'/.0'}/>
			</div>
		);
	};

	let ReactPopoverMenu132 = function() {
		return <InlineBlock131 />;
	};

	let XUIButtonGroup133 = function() {
		return (
			<div className={'_5n7z _51xa'}>
				<XUIButton127 />
				<ReactPopoverMenu132 />
			</div>
		);
	};

	let ReactImage134 = function() {
		return <i alt={''} className={'_3-8_ img sp_UuU9HmrQ397 sx_990b54'} src={null}/>;
	};

	let AbstractButton135 = function() {
		return (
			<button size={'large'} disabled={false} className={'_d2_ _u_k _5n7z _4jy0 _4jy4 _517h _51sy _42ft'} image={{}} data-hover={'tooltip'} aria-label={'Edit Ads (Ctrl+U)'} onClick={function () { } }
							use={'default'} label={null} borderShade={'light'} suppressed={false} type='submit' value={'1'}>
				<ReactImage134 />
				{'Edit'}
				{undefined}
			</button>
		);
	};

	let XUIButton136 = function() {
		return <AbstractButton135 />;
	};

	let ReactImage137 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_203adb'}/>;
	};

	let AbstractButton138 = function() {
		return (
			<button aria-label={'Duplicate'} className={'_u_k _4jy0 _4jy4 _517h _51sy _42ft'} data-hover={'tooltip'} disabled={false} image={{}} size={'large'} onClick={function () { } } use={'default'}
							borderShade={'light'} suppressed={false} label={null} type='submit' value={'1'}>
				<ReactImage137 />
				{undefined}
				{undefined}
			</button>
		);
	};

	let XUIButton139 = function() {
		return <AbstractButton138 />;
	};

	let ReactImage140 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_0c342e'}/>;
	};

	let AbstractButton141 = function() {
		return (
			<button aria-label={'Revert'} className={'_u_k _4jy0 _4jy4 _517h _51sy _42ft _42fr'} data-hover={'tooltip'} disabled={true} image={{}} size={'large'} onClick={function() {
			} } use={'default'}
				borderShade={'light'} suppressed={false} label={null} type='submit' value={'1'}>
				<ReactImage140 />
				{undefined}
				{undefined}
			</button
		>
		)
		;
	};

	let XUIButton142 = function() {
		return <AbstractButton141 />;
	};

	let ReactImage143 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_0e75f5'}/>;
	};

	let AbstractButton144 = function() {
		return (
			<button aria-label={'Delete'} className={'_u_k _4jy0 _4jy4 _517h _51sy _42ft'} image={{}} data-hover={'tooltip'} disabled={false} size={'large'} onClick={function () { } } use={'default'}
							borderShade={'light'} suppressed={false} label={null} type='submit' value={'1'}>
				<ReactImage143 />
				{undefined}
				{undefined}
			</button>
		);
	};

	let XUIButton145 = function() {
		return <AbstractButton144 />;
	};

	let XUIButtonGroup146 = function() {
		return (
			<div className={'_5n7z _51xa'}>
				<XUIButton139 key={'duplicate'}/>
				<XUIButton142 key={'revert'}/>
				<XUIButton145 key={'delete'}/>
			</div>
		);
	};

	let ReactImage147 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_8c19ae'}/>;
	};

	let AbstractButton148 = function() {
		return (
			<button size={'large'} disabled={false} className={'_u_k _4jy0 _4jy4 _517h _51sy _42ft'} image={{}} data-hover={'tooltip'} aria-label={'Save Audience'} onClick={function () { } } use={'default'}
							borderShade={'light'} suppressed={false} label={null} type='submit' value={'1'}>
				<ReactImage147 />
				{undefined}
				{undefined}
			</button>
		);
	};

	let XUIButton149 = function() {
		return <AbstractButton148 />;
	};

	let ReactImage150 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_d2b33c'}/>;
	};

	let AbstractButton151 = function() {
		return (
			<button size={'large'} className={'_u_k noMargin _p _4jy0 _4jy4 _517h _51sy _42ft'} onClick={function () { } } image={{}} data-hover={'tooltip'} aria-label={'Export & Import'} use={'default'}
							borderShade={'light'} suppressed={false} label={null} type='submit' value={'1'}>
				<ReactImage150 />
				{undefined}
				{undefined}
			</button>
		);
	};

	let XUIButton152 = function() {
		return <AbstractButton151 />;
	};

	let InlineBlock153 = function() {
		return (
			<div menu={{}} size={'large'} alignv={'middle'} className={'uiPopover _6a _6b'} disabled={null} fullWidth={false}>
				<XUIButton152 key={'/.0'}/>
			</div>
		);
	};

	let ReactPopoverMenu154 = function() {
		return <InlineBlock153 />;
	};

	let AdsPEExportImportMenu155 = function() {
		return <ReactPopoverMenu154 key={'export'}/>;
	};

	let FluxContainer_x_156 = function() {
		return null;
	};

	let AdsPEExportAsTextDialog157 = function() {
		return null;
	};

	let FluxContainer_q_158 = function() {
		return <AdsPEExportAsTextDialog157 />;
	};

	let AdsPEExportImportMenuContainer159 = function() {
		return (
			<span>
				<AdsPEExportImportMenu155 />
				<FluxContainer_x_156 />
				<FluxContainer_q_158 />
				{null}
			</span>
		);
	};

	let ReactImage160 = function() {
		return <i src={null} className={'img sp_UuU9HmrQ397 sx_872db1'}/>;
	};

	let AbstractButton161 = function() {
		return (
			<button size={'large'} disabled={false} onClick={function () { } } className={'_u_k _5n7z _4jy0 _4jy4 _517h _51sy _42ft'} image={{}}
							style={{ boxSizing: 'border-box', height: '28px', width: '48px' }} data-hover={'tooltip'} aria-label={'Create Report'} use={'default'} borderShade={'light'} suppressed={false}
							label={null} type='submit' value={'1'}>
				<ReactImage160 />
				{undefined}
				{undefined}
			</button>
		);
	};

	let XUIButton162 = function() {
		return <AbstractButton161 />;
	};

	let AbstractButton163 = function() {
		return (
			<button size={'large'} disabled={true} className={'hidden_elem _5n7z _4jy0 _4jy4 _517h _51sy _42ft _42fr'} label={null} onClick={function () { } } use={'default'} borderShade={'light'}
							suppressed={false} type='submit' value={'1'}>
				{undefined}
				{'Generate Variations'}
				{undefined}
			</button>
		);
	};

	let XUIButton164 = function() {
		return <AbstractButton163 />;
	};

	let XUIButtonGroup165 = function() {
		return (
			<div className={'_5n7z _51xa'}>
				<XUIButton149 key={'saveAudience'}/>
				<AdsPEExportImportMenuContainer159 />
				<XUIButton162 key={'createReport'}/>
				<XUIButton164 key={'variations'}/>
			</div>
		);
	};

	let FillColumn166 = function() {
		return (
			<div className={'_4bl9'}>
				<span className={'_3c5e'}>
					<span>
						<XUIButtonGroup133 />
						<XUIButton136 key={'edit'}/>
						<XUIButtonGroup146 />
					</span>
					<XUIButtonGroup165 />
				</span>
			</div>
		);
	};

	let Layout167 = function() {
		return (
			<div className={'clearfix'}>
				<Column124 key={'1'}/>
				<FillColumn166 key={'0'}/>
			</div>
		);
	};

	let AdsPEMainPaneToolbar168 = function() {
		return (
			<div className={'_3c5b clearfix'}>
				<Layout167 />
			</div>
		);
	};

	let AdsPEAdgroupToolbarContainer169 = function() {
		return (
			<div>
				<AdsPEMainPaneToolbar168 />
				{null}
			</div>
		);
	};

	let AbstractButton170 = function() {
		return (
			<button className={'_tm3 _tm6 _4jy0 _4jy6 _517h _51sy _42ft'} label={null} data-tooltip-position={'right'} aria-label={'Campaigns'} data-hover={'tooltip'} onClick={function () { } }
							size={'xxlarge'} use={'default'} borderShade={'light'} suppressed={false} type='submit' value={'1'}>
				{undefined}
				<div>
					<div className={'_tma'}></div>
					<div className={'_tm8'}></div>
					<div className={'_tm9'}>{1}</div>
				</div>
				{undefined}
			</button>
		);
	};

	let XUIButton171 = function() {
		return <AbstractButton170 />;
	};

	let AbstractButton172 = function() {
		return (
			<button className={'_tm4 _tm6 _4jy0 _4jy6 _517h _51sy _42ft'} label={null} data-tooltip-position={'right'} aria-label={'Ad Sets'} data-hover={'tooltip'} onClick={function () { } }
							size={'xxlarge'} use={'default'} borderShade={'light'} suppressed={false} type='submit' value={'1'}>
				{undefined}
				<div>
					<div className={'_tma'}></div>
					<div className={'_tm8'}></div>
					<div className={'_tm9'}>{1}</div>
				</div>
				{undefined}
			</button>
		);
	};

	let XUIButton173 = function() {
		return <AbstractButton172 />;
	};

	let AbstractButton174 = function() {
		return (
			<button className={'_tm5 _tm6 _tm7 _4jy0 _4jy6 _517h _51sy _42ft'} label={null} data-tooltip-position={'right'} aria-label={'Ads'} data-hover={'tooltip'} onClick={function () { } }
							size={'xxlarge'} use={'default'} borderShade={'light'} suppressed={false} type='submit' value={'1'}>
				{undefined}
				<div>
					<div className={'_tma'}></div>
					<div className={'_tm8'}></div>
					<div className={'_tm9'}>{1}</div>
				</div>
				{undefined}
			</button>
		);
	};

	let XUIButton175 = function() {
		return <AbstractButton174 />;
	};

	let AdsPESimpleOrganizer176 = function() {
		return (
			<div className={'_tm2'}>
				<XUIButton171 />
				<XUIButton173 />
				<XUIButton175 />
			</div>
		);
	};

	let AdsPEOrganizerContainer177 = function() {
		return (
			<div>
				<AdsPESimpleOrganizer176 />
			</div>
		);
	};

	let FixedDataTableColumnResizeHandle178 = function() {
		return (
			<div className={'_3487 _3488 _3489'} style={{ width: 0, height: 532, left: 0 }}>
				<div className={'_348a'} style={{ height: 532 }}></div>
			</div>
		);
	};

	let ReactImage179 = function() {
		return <i className={'_1cie _1cif img sp_R48dKBxiJkP sx_dc0ad2'} src={null}/>;
	};

	let AdsPETableHeader180 = function() {
		return (
			<div className={'_1cig _1ksv _1vd7 _4h2r'}>
				<ReactImage179 />
				<span className={'_1cid'}>{'Ads'}</span>
			</div>
		);
	};

	let TransitionCell181 = function() {
		return (
			<div isHeaderCell={true} label={'Ads'} dataKey={0} groupHeaderRenderer={function () { } } groupHeaderLabels={{}} groupHeaderData={{}} columnKey={undefined} height={40} width={521} rowIndex={0}
					 className={'_4lgc _4h2u'} style={{ height: 40, width: 521 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<AdsPETableHeader180 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell182 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 40, width: 521, left: 0 }}>
				{undefined}
				<TransitionCell181 />
			</div>
		);
	};

	let FixedDataTableCellGroupImpl183 = function() {
		return (
			<div className={'_3pzj'} style={{ height: 40, position: 'absolute', width: 521, zIndex: 2, transform: 'translate3d(0px,0px,0)', backfaceVisibility: 'hidden' }}>
				<FixedDataTableCell182 key={'cell_0'}/>
			</div>
		);
	};

	let FixedDataTableCellGroup184 = function() {
		return (
			<div style={{ height: 40, left: 0 }} className={'_3pzk'}>
				<FixedDataTableCellGroupImpl183 />
			</div>
		);
	};

	let AdsPETableHeader185 = function() {
		return (
			<div className={'_1cig _1vd7 _4h2r'}>
				{null}
				<span className={'_1cid'}>{'Delivery'}</span>
			</div>
		);
	};

	let TransitionCell186 = function() {
		return (
			<div isHeaderCell={true} label={'Delivery'} dataKey={1} groupHeaderRenderer={function () { } } groupHeaderLabels={{}} groupHeaderData={{}} columnKey={undefined} height={40} width={298}
					 rowIndex={0} className={'_4lgc _4h2u'} style={{ height: 40, width: 298 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<AdsPETableHeader185 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell187 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 40, width: 298, left: 0 }}>
				{undefined}
				<TransitionCell186 />
			</div>
		);
	};

	let AdsPETableHeader188 = function() {
		return (
			<div className={'_1cig _1vd7 _4h2r'}>
				{null}
				<span className={'_1cid'}>{'Performance'}</span>
			</div>
		);
	};

	let TransitionCell189 = function() {
		return (
			<div isHeaderCell={true} label={'Performance'} dataKey={2} groupHeaderRenderer={function() {
			} } groupHeaderLabels={{}} groupHeaderData={{}} columnKey={undefined} height={40} width={490}
				rowIndex={0} className={'_4lgc _4h2u'} style={{ height: 40, width: 490 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
					<AdsPETableHeader188 />
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell190 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 40, width: 490, left: 298 }}>
				{undefined}
				<TransitionCell189 />
			</div>
		);
	};

	let AdsPETableHeader191 = function() {
		return (
			<div className={'_1cig _1vd7 _4h2r'}>
				{null}
				<span className={'_1cid'}>{'Overview'}</span>
			</div>
		);
	};

	let TransitionCell192 = function() {
		return (
			<div isHeaderCell={true} label={'Overview'} dataKey={3} groupHeaderRenderer={function() {
			} } groupHeaderLabels={{}} groupHeaderData={{}} columnKey={undefined} height={40} width={972}
				rowIndex={0} className={'_4lgc _4h2u'} style={{ height: 40, width: 972 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
						<AdsPETableHeader191 />
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell193 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 40, width: 972, left: 788 }}>
				{undefined}
				<TransitionCell192 />
			</div>
		);
	};

	let AdsPETableHeader194 = function() {
		return (
			<div className={'_1cig _1vd7 _4h2r'}>
				{null}
				<span className={'_1cid'}>{'Creative Assets'}</span>
			</div>
		);
	};

	let TransitionCell195 = function() {
		return (
			<div isHeaderCell={true} label={'Creative Assets'} dataKey={4} groupHeaderRenderer={function() {
			} } groupHeaderLabels={{}} groupHeaderData={{}} columnKey={undefined} height={40} width={514}
				rowIndex={0} className={'_4lgc _4h2u'} style={{ height: 40, width: 514 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
				<AdsPETableHeader194 />
			</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell196 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 40, width: 514, left: 1760 }}>
				{undefined}
				<TransitionCell195 />
			</div>
		);
	};

	let AdsPETableHeader197 = function() {
		return (
			<div className={'_1cig _1vd7 _4h2r'}>
				{null}
				<span className={'_1cid'}>{'Toplines'}</span>
			</div>
		);
	};

	let TransitionCell198 = function() {
		return (
			<div isHeaderCell={true} label={'Toplines'} dataKey={5} groupHeaderRenderer={function () { } } groupHeaderLabels={{}} groupHeaderData={{}} columnKey={undefined} height={40} width={0}
					 rowIndex={0} className={'_4lgc _4h2u'} style={{ height: 40, width: 0 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<AdsPETableHeader197 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell199 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 40, width: 0, left: 2274 }}>
				{undefined}
				<TransitionCell198 />
			</div>
		);
	};

	let AdsPETableHeader200 = function() {
		return <div className={'_1cig _1vd7 _4h2r'}></div>;
	};

	let TransitionCell201 = function() {
		return (
			<div isHeaderCell={true} label={''} dataKey={6} groupHeaderRenderer={function () { } } groupHeaderLabels={{}} groupHeaderData={{}} columnKey={undefined} height={40} width={25} rowIndex={0}
					 className={'_4lgc _4h2u'} style={{ height: 40, width: 25 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<AdsPETableHeader200 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell202 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 40, width: 25, left: 2274 }}>
				{undefined}
				<TransitionCell201 />
			</div>
		);
	};

	let FixedDataTableCellGroupImpl203 = function() {
		return (
			<div className={'_3pzj'} style={{ height: 40, position: 'absolute', width: 2299, zIndex: 0, transform: 'translate3d(0px,0px,0)', backfaceVisibility: 'hidden' }}>
				<FixedDataTableCell187 key={'cell_0'}/>
				<FixedDataTableCell190 key={'cell_1'}/>
				<FixedDataTableCell193 key={'cell_2'}/>
				<FixedDataTableCell196 key={'cell_3'}/>
				<FixedDataTableCell199 key={'cell_4'}/>
				<FixedDataTableCell202 key={'cell_5'}/>
			</div>
		);
	};

	let FixedDataTableCellGroup204 = function() {
		return (
			<div style={{ height: 40, left: 521 }} className={'_3pzk'}>
				<FixedDataTableCellGroupImpl203 />
			</div>
		);
	};

	let FixedDataTableRowImpl205 = function() {
		return (
			<div className={'_1gd4 _4li _52no _3h1a _1mib'} onClick={null} onDoubleClick={null} onMouseDown={null} onMouseEnter={null} onMouseLeave={null} style={{ width: 1083, height: 40 }}>
				<div className={'_1gd5'}>
					<FixedDataTableCellGroup184 key={'fixed_cells'}/>
					<FixedDataTableCellGroup204 key={'scrollable_cells'}/>
					<div className={'_1gd6 _1gd8'} style={{ left: 521, height: 40 }}>
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableRow206 = function() {
		return (
			<div style={{ width: 1083, height: 40, zIndex: 1, transform: 'translate3d(0px,0px,0)', backfaceVisibility: 'hidden' }} className={'_1gda'}>
				<FixedDataTableRowImpl205 />
			</div>
		);
	};

	let AbstractCheckboxInput207 = function() {
		return (
			<label className={'_4h2r _55sg _kv1'}>
				<input checked={undefined} onChange={function() {
			} } className={null} type={'checkbox'}/>
				<span data-hover={null} aria-label={undefined}/>
			</label>
		);
	};

	let XUICheckboxInput208 = function() {
		return <AbstractCheckboxInput207 />;
	};

	let TransitionCell209 = function() {
		return (
			<div isHeaderCell={true} label={undefined} width={42} dataKey={'common.id'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'common.id'} height={25} style={{ height: 25, width: 42 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<XUICheckboxInput208 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell210 = function() {
		return (
			<div className={'_4lg0 _4lg6 _4h2m'} style={{ height: 25, width: 42, left: 0 }}>
				{undefined}
				<TransitionCell209 />
			</div>
		);
	};

	let AdsPETableHeader211 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Ad Name'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader212 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader211 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader213 = function() {
		return <FixedDataTableAbstractSortableHeader212 />;
	};

	let TransitionCell214 = function() {
		return (
			<div isHeaderCell={true} label={'Ad Name'} width={200} dataKey={'ad.name'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'ad.name'} height={25} style={{ height: 25, width: 200 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader213 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell215 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 200, left: 42 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell214 />
			</div>
		);
	};

	let ReactImage216 = function() {
		return <i className={'_1cie img sp_UuU9HmrQ397 sx_844e7d'} src={null}></i>;
	};

	let AdsPETableHeader217 = function() {
		return (
			<div className={'_1cig _25fg'}>
				<ReactImage216 />
				{null}
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader218 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _1kst _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader217 />
				</div
				>
			</div>
		);
	};

	let FixedDataTableSortableHeader219 = function() {
		return <FixedDataTableAbstractSortableHeader218 />;
	};

	let TransitionCell220 = function() {
		return (
			<div isHeaderCell={true} label={undefined} width={33} dataKey={'edit_status'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'edit_status'} height={25} style={{ height: 25, width: 33 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader219 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell221 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 33, left: 242 }}>
				{undefined}
				<TransitionCell220 />
			</div>
		);
	};

	let ReactImage222 = function() {
		return <i className={'_1cie img sp_UuU9HmrQ397 sx_36dc45'} src={null}></i>;
	};

	let AdsPETableHeader223 = function() {
		return (
			<div className={'_1cig _25fg'}>
				<ReactImage222 />
				{null}
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader224 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _1kst _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader223 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader225 = function() {
		return <FixedDataTableAbstractSortableHeader224 />;
	};

	let TransitionCell226 = function() {
		return (
			<div isHeaderCell={true} label={undefined} width={36} dataKey={'errors'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'errors'} height={25} style={{ height: 25, width: 36 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader225 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell227 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 36, left: 275 }}>
				{undefined}
				<TransitionCell226 />
			</div>
		);
	};

	let AdsPETableHeader228 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Status'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader229 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader228 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader230 = function() {
		return <FixedDataTableAbstractSortableHeader229 />;
	};

	let TransitionCell231 = function() {
		return (
			<div isHeaderCell={true} label={'Status'} width={60} dataKey={'ad.adgroup_status'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'ad.adgroup_status'} height={25} style={{ height: 25, width: 60 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader230 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell232 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 60, left: 311 }}>
				{undefined}
				<TransitionCell231 />
			</div>
		);
	};

	let AdsPETableHeader233 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Delivery'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader234 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader233 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader235 = function() {
		return <FixedDataTableAbstractSortableHeader234 />;
	};

	let TransitionCell236 = function() {
		return (
			<div isHeaderCell={true} label={'Delivery'} width={150} dataKey={'ukiAdData.computed_activity_status'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'ukiAdData.computed_activity_status'} height={25} style={{ height: 25, width: 150 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader235 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell237 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 150, left: 371 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell236 />
			</div>
		);
	};

	let FixedDataTableCellGroupImpl238 = function() {
		return (
			<div className={'_3pzj'} style={{ height: 25, position: 'absolute', width: 521, zIndex: 2, transform: 'translate3d(0px,0px,0)', backfaceVisibility: 'hidden' }}>
				<FixedDataTableCell210 key={'cell_0'}/>
				<FixedDataTableCell215 key={'cell_1'}/>
				<FixedDataTableCell221 key={'cell_2'}/>
				<FixedDataTableCell227 key={'cell_3'}/>
				<FixedDataTableCell232 key={'cell_4'}/>
				<FixedDataTableCell237 key={'cell_5'}/>
			</div>
		);
	};

	let FixedDataTableCellGroup239 = function() {
		return (
			<div style={{ height: 25, left: 0 }} className={'_3pzk'}>
				<FixedDataTableCellGroupImpl238 />
			</div>
		);
	};

	let AdsPETableHeader240 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Reach'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader241 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader240 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader242 = function() {
		return <FixedDataTableAbstractSortableHeader241 />;
	};

	let TransitionCell243 = function() {
		return (
			<div isHeaderCell={true} label={'Reach'} width={60} dataKey={'stats.unique_impressions'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'stats.unique_impressions'} height={25} style={{ height: 25, width: 60 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader242 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell244 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 60, left: 0 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell243 />
			</div>
		);
	};

	let AdsPETableHeader245 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Ad Impressions'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader246 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader245 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader247 = function() {
		return <FixedDataTableAbstractSortableHeader246 />;
	};

	let TransitionCell248 = function() {
		return (
			<div isHeaderCell={true} label={'Ad Impressions'} width={80} dataKey={'stats.impressions'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'stats.impressions'} height={25} style={{ height: 25, width: 80 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader247 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell249 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 80, left: 60 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell248 />
			</div>
		);
	};

	let AdsPETableHeader250 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Avg. CPM'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader251 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader250 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader252 = function() {
		return <FixedDataTableAbstractSortableHeader251 />;
	};

	let TransitionCell253 = function() {
		return (
			<div isHeaderCell={true} label={'Avg. CPM'} width={80} dataKey={'stats.avg_cpm'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'stats.avg_cpm'} height={25} style={{ height: 25, width: 80 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader252 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell254 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 80, left: 140 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell253 />
			</div>
		);
	};

	let AdsPETableHeader255 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Avg. CPC'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader256 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader255 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader257 = function() {
		return <FixedDataTableAbstractSortableHeader256 />;
	};

	let TransitionCell258 = function() {
		return (
			<div isHeaderCell={true} label={'Avg. CPC'} width={78} dataKey={'stats.avg_cpc'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'stats.avg_cpc'} height={25} style={{ height: 25, width: 78 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader257 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell259 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 78, left: 220 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell258 />
			</div>
		);
	};

	let AdsPETableHeader260 = function() {
		return (
			<div className={'_1cig _25fg _4h2r'}>
				{null}
				<span className={'_1cid'}>{'Results'}</span>
			</div>
		);
	};

	let TransitionCell261 = function() {
		return (
			<div isHeaderCell={true} label={'Results'} width={140} dataKey={'stats.actions'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function() {
			} } headerDataGetter={function() {
			} }
				columnKey={'stats.actions'} height={25} style={{ height: 25, width: 140 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
					<AdsPETableHeader260 />
				</div
				>
			</div
				>
			</div>
		);
	};

	let FixedDataTableCell262 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 140, left: 298 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell261 />
			</div>
		);
	};

	let AdsPETableHeader263 = function() {
		return (
			<div className={'_1cig _25fg _4h2r'}>
				{null}
				<span className={'_1cid'}>{'Cost'}</span>
			</div>
		);
	};

	let TransitionCell264 = function() {
		return (
			<div isHeaderCell={true} label={'Cost'} width={140} dataKey={'stats.cpa'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function() {
			} } headerDataGetter={function() {
			} }
				columnKey={'stats.cpa'} height={25} style={{ height: 25, width: 140 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
					<AdsPETableHeader263 />
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell265 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 140, left: 438 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell264 />
			</div>
		);
	};

	let AdsPETableHeader266 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Clicks'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader267 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader266 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader268 = function() {
		return <FixedDataTableAbstractSortableHeader267 />;
	};

	let TransitionCell269 = function() {
		return (
			<div isHeaderCell={true} label={'Clicks'} width={60} dataKey={'stats.clicks'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function() {
			} }
				columnKey={'stats.clicks'} height={25} style={{ height: 25, width: 60 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
					<FixedDataTableSortableHeader268 />
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell270 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 60, left: 578 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell269 />
			</div>
		);
	};

	let AdsPETableHeader271 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'CTR %'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader272 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader271 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader273 = function() {
		return <FixedDataTableAbstractSortableHeader272 />;
	};

	let TransitionCell274 = function() {
		return (
			<div isHeaderCell={true} label={'CTR %'} width={70} dataKey={'stats.ctr'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'stats.ctr'} height={25} style={{ height: 25, width: 70 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader273 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell275 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 70, left: 638 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell274 />
			</div>
		);
	};

	let AdsPETableHeader276 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Social %'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader277 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader276 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader278 = function() {
		return <FixedDataTableAbstractSortableHeader277 />;
	};

	let TransitionCell279 = function() {
		return (
			<div isHeaderCell={true} label={'Social %'} width={80} dataKey={'stats.social_percent'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function() {
			} }
				headerDataGetter={function() {
			} } columnKey={'stats.social_percent'} height={25} style={{ height: 25, width: 80 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
					<FixedDataTableSortableHeader278 />
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell280 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 80, left: 708 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell279 />
			</div>
		);
	};

	let AdsPETableHeader281 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Ad Set Name'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader282 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader281 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader283 = function() {
		return <FixedDataTableAbstractSortableHeader282 />;
	};

	let TransitionCell284 = function() {
		return (
			<div isHeaderCell={true} label={'Ad Set Name'} width={100} dataKey={'campaign.name'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'campaign.name'} height={25} style={{ height: 25, width: 100 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader283 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell285 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 100, left: 788 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell284 />
			</div>
		);
	};

	let AdsPETableHeader286 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Campaign Name'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader287 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader286 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader288 = function() {
		return <FixedDataTableAbstractSortableHeader287 />;
	};

	let TransitionCell289 = function() {
		return (
			<div isHeaderCell={true} label={'Campaign Name'} width={150} dataKey={'campaignGroup.name'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'campaignGroup.name'} height={25} style={{ height: 25, width: 150 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader288 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell290 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 150, left: 888 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell289 />
			</div>
		);
	};

	let AdsPETableHeader291 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Ad ID'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader292 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader291 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader293 = function() {
		return <FixedDataTableAbstractSortableHeader292 />;
	};

	let TransitionCell294 = function() {
		return (
			<div isHeaderCell={true} label={'Ad ID'} width={120} dataKey={'ad.id'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'ad.id'} height={25} style={{ height: 25, width: 120 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader293 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell295 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 120, left: 1038 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell294 />
			</div>
		);
	};

	let AdsPETableHeader296 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Objective'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader297 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader296 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader298 = function() {
		return <FixedDataTableAbstractSortableHeader297 />;
	};

	let TransitionCell299 = function() {
		return (
			<div isHeaderCell={true} label={'Objective'} width={80} dataKey={'campaignGroup.objective'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'campaignGroup.objective'} height={25} style={{ height: 25, width: 80 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader298 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell300 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 80, left: 1158 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell299 />
			</div>
		);
	};

	let AdsPETableHeader301 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Spent'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader302 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader301 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader303 = function() {
		return <FixedDataTableAbstractSortableHeader302 />;
	};

	let TransitionCell304 = function() {
		return (
			<div isHeaderCell={true} label={'Spent'} width={70} dataKey={'stats.spent_100'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'stats.spent_100'} height={25} style={{ height: 25, width: 70 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader303 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell305 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 25, width: 70, left: 1238 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell304 />
			</div>
		);
	};

	let AdsPETableHeader306 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Start'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader307 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader306 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader308 = function() {
		return <FixedDataTableAbstractSortableHeader307 />;
	};

	let TransitionCell309 = function() {
		return (
			<div isHeaderCell={true} label={'Start'} width={113} dataKey={'derivedCampaign.startDate'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'derivedCampaign.startDate'} height={25} style={{ height: 25, width: 113 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader308 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell310 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 113, left: 1308 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell309 />
			</div>
		);
	};

	let AdsPETableHeader311 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'End'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader312 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader311 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader313 = function() {
		return <FixedDataTableAbstractSortableHeader312 />;
	};

	let TransitionCell314 = function() {
		return (
			<div isHeaderCell={true} label={'End'} width={113} dataKey={'derivedCampaign.endDate'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'derivedCampaign.endDate'} height={25} style={{ height: 25, width: 113 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader313 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell315 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 113, left: 1421 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell314 />
			</div>
		);
	};

	let AdsPETableHeader316 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Date created'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader317 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader316 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader318 = function() {
		return <FixedDataTableAbstractSortableHeader317 />;
	};

	let TransitionCell319 = function() {
		return (
			<div isHeaderCell={true} label={'Date created'} width={113} dataKey={'ad.created_time'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'ad.created_time'} height={25} style={{ height: 25, width: 113 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader318 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell320 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 113, left: 1534 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell319 />
			</div>
		);
	};

	let AdsPETableHeader321 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Date last edited'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader322 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader321 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader323 = function() {
		return <FixedDataTableAbstractSortableHeader322 />;
	};

	let TransitionCell324 = function() {
		return (
			<div isHeaderCell={true} label={'Date last edited'} width={113} dataKey={'ad.updated_time'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'ad.updated_time'} height={25} style={{ height: 25, width: 113 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader323 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell325 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 113, left: 1647 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell324 />
			</div>
		);
	};

	let AdsPETableHeader326 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Title'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader327 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader326 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader328 = function() {
		return <FixedDataTableAbstractSortableHeader327 />;
	};

	let TransitionCell329 = function() {
		return (
			<div isHeaderCell={true} label={'Title'} width={80} dataKey={'ad.title'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'ad.title'} height={25} style={{ height: 25, width: 80 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader328 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell330 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 80, left: 1760 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function() {
			} }>
			<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
			</div>
			<TransitionCell329/>
			</div>
		);
	};

	let AdsPETableHeader331 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Body'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader332 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader331 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader333 = function() {
		return <FixedDataTableAbstractSortableHeader332 />;
	};

	let TransitionCell334 = function() {
		return (
			<div isHeaderCell={true} label={'Body'} width={80} dataKey={'ad.creative.body'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'ad.creative.body'} height={25} style={{ height: 25, width: 80 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader333 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell335 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 80, left: 1840 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell334 />
			</div>
		);
	};

	let AdsPETableHeader336 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Destination'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader337 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader336 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader338 = function() {
		return <FixedDataTableAbstractSortableHeader337 />;
	};

	let TransitionCell339 = function() {
		return (
			<div isHeaderCell={true} label={'Destination'} width={92} dataKey={'destination'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'destination'} height={25} style={{ height: 25, width: 92 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader338 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell340 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 92, left: 1920 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell339 />
			</div>
		);
	};

	let AdsPETableHeader341 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Link'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader342 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader341 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader343 = function() {
		return <FixedDataTableAbstractSortableHeader342 />;
	};

	let TransitionCell344 = function() {
		return (
			<div isHeaderCell={true} label={'Link'} width={70} dataKey={'ad.creative.link_url'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'ad.creative.link_url'} height={25} style={{ height: 25, width: 70 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader343 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell345 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 70, left: 2012 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell344 />
			</div>
		);
	};

	let AdsPETableHeader346 = function() {
		return (
			<div className={'_1cig _25fg'}>
				{null}
				<span className={'_1cid'}>{'Related Page'}</span>
			</div>
		);
	};

	let FixedDataTableAbstractSortableHeader347 = function() {
		return (
			<div onClick={function () { } } className={'_54_8 _4h2r _2wzx'}>
				<div className={'_2eq6'}>
					{null}
					<AdsPETableHeader346 />
				</div>
			</div>
		);
	};

	let FixedDataTableSortableHeader348 = function() {
		return <FixedDataTableAbstractSortableHeader347 />;
	};

	let TransitionCell349 = function() {
		return (
			<div isHeaderCell={true} label={'Related Page'} width={92} dataKey={'page'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'page'} height={25} style={{ height: 25, width: 92 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<FixedDataTableSortableHeader348 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell350 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 92, left: 2082 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell349 />
			</div>
		);
	};

	let AdsPETableHeader351 = function() {
		return (
			<div className={'_1cig _25fg _4h2r'}>
				{null}
				<span className={'_1cid'}>{'Preview Link'}</span>
			</div>
		);
	};

	let TransitionCell352 = function() {
		return (
			<div isHeaderCell={true} label={'Preview Link'} width={100} dataKey={'ad.demolink_hash'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } }
					 headerDataGetter={function () { } } columnKey={'ad.demolink_hash'} height={25} style={{ height: 25, width: 100 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<AdsPETableHeader351 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell353 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 100, left: 2174 }}>
				<div className={'_4lg9'} style={{ height: 25 }} onMouseDown={function () { } }>
					<div className={'_4lga _4lgb'} style={{ height: 25 }}></div>
				</div>
				<TransitionCell352 />
			</div>
		);
	};

	let AdsPETableHeader354 = function() {
		return <div className={'_1cig _25fg _4h2r'}></div>;
	};

	let TransitionCell355 = function() {
		return (
			<div isHeaderCell={true} label={''} width={25} dataKey={'scrollbar_spacer'} className={'_4lgc _4h2u'} columnData={{}} cellRenderer={function () { } } headerDataGetter={function () { } }
					 columnKey={'scrollbar_spacer'} height={25} style={{ height: 25, width: 25 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<AdsPETableHeader354 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell356 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 25, width: 25, left: 2274 }}>
				{undefined}
				<TransitionCell355 />
			</div>
		);
	};

	let FixedDataTableCellGroupImpl357 = function() {
		return (
			<div className={'_3pzj'} style={{ height: 25, position: 'absolute', width: 2299, zIndex: 0, transform: 'translate3d(0px,0px,0)', backfaceVisibility: 'hidden' }}>
				<FixedDataTableCell244 key={'cell_0'}/>
				<FixedDataTableCell249 key={'cell_1'}/>
				<FixedDataTableCell254 key={'cell_2'}/>
				<FixedDataTableCell259 key={'cell_3'}/>
				<FixedDataTableCell262 key={'cell_4'}/>
				<FixedDataTableCell265 key={'cell_5'}/>
				<FixedDataTableCell270 key={'cell_6'}/>
				<FixedDataTableCell275 key={'cell_7'}/>
				<FixedDataTableCell280 key={'cell_8'}/>
				<FixedDataTableCell285 key={'cell_9'}/>
				<FixedDataTableCell290 key={'cell_10'}/>
				<FixedDataTableCell295 key={'cell_11'}/>
				<FixedDataTableCell300 key={'cell_12'}/>
				<FixedDataTableCell305 key={'cell_13'}/>
				<FixedDataTableCell310 key={'cell_14'}/>
				<FixedDataTableCell315 key={'cell_15'}/>
				<FixedDataTableCell320 key={'cell_16'}/>
				<FixedDataTableCell325 key={'cell_17'}/>
				<FixedDataTableCell330 key={'cell_18'}/>
				<FixedDataTableCell335 key={'cell_19'}/>
				<FixedDataTableCell340 key={'cell_20'}/>
				<FixedDataTableCell345 key={'cell_21'}/>
				<FixedDataTableCell350 key={'cell_22'}/>
				<FixedDataTableCell353 key={'cell_23'}/>
				<FixedDataTableCell356 key={'cell_24'}/>
			</div
			>
		);
	};

	let FixedDataTableCellGroup358 = function() {
		return (
			<div style={{ height: 25, left: 521 }} className={'_3pzk'}>
				<FixedDataTableCellGroupImpl357 />
			</div>
		);
	};

	let FixedDataTableRowImpl359 = function() {
		return (
		<div className={'_1gd4 _4li _3h1a _1mib'} onClick={null} onDoubleClick={null} onMouseDown={null} onMouseEnter={null} onMouseLeave={null} style={{ width: 1083, height: 25 }}>
				<div className={'_1gd5'}>
					<FixedDataTableCellGroup239 key={'fixed_cells'}/>
					<FixedDataTableCellGroup358 key={'scrollable_cells'}/>
		<div className={'_1gd6 _1gd8'} style={{ left: 521, height: 25 }}></div>
		</div>
		</div>
		);
	};

	let FixedDataTableRow360 = function() {
		return (
			<div style={{ width: 1083, height: 25, zIndex: 1, transform: 'translate3d(0px,40px,0)', backfaceVisibility: 'hidden' }} className={'_1gda'}>
				<FixedDataTableRowImpl359 />
			</div>
		);
	};

	let AbstractCheckboxInput361 = function() {
		return (
			<label className={'_5hhv _55sg _kv1'}>
				<input className={null} disabled={false} inline={true} checked={true} value={undefined} onChange={function () { } } type={'checkbox'}/>
				<span data-hover={null} aria-label={undefined}/>
			</label>
		);
	};

	let XUICheckboxInput362 = function() {
		return <AbstractCheckboxInput361 />;
	};

	let TransitionCell363 = function() {
		return (
			<div dataKey={'common.id'} className={'_4lgc _4h2u'} rowGetter={function() {
			} } width={42} columnData={{}} cellDataGetter={function() {
			} } cellRenderer={function() {
			} }
				columnKey={'common.id'} height={32} rowIndex={0} style={{ height: 32, width: 42 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
						<span className={'_5hhu _4h2r'} onMouseDown={function () { } }>
							<XUICheckboxInput362 />
						</span>
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell364 = function() {
		return (
			<div className={'_4lg0 _4lg6 _4h2m'} style={{ height: 32, width: 42, left: 0 }}>
				{undefined}
				<TransitionCell363 />
			</div>
		);
	};

	let AdsEditableTextCellDisplay365 = function() {
		return (
			<div className={'_vew'} onDoubleClick={function () { } } onMouseEnter={function () { } } onMouseLeave={function () { } }>
				<div className={'_vex _5w6k'}>
					<div className={'_vey'}>{'Test Ad'}</div>
					<div className={'_5w6_'}></div>
				</div>
			</div>
		);
	};

	let AdsEditableCell366 = function() {
		return (
			<div className={'_2d6h _2-ev _4h2r _5abb'}>
				<AdsEditableTextCellDisplay365 />
			</div>
		);
	};

	let TransitionCell367 = function() {
		return (
			<div dataKey={'ad.name'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={200} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'ad.name'} height={32} rowIndex={0} style={{ height: 32, width: 200 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<AdsEditableCell366 />
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell368 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 200, left: 42 }}>
				{undefined}
				<TransitionCell367 />
			</div>
		);
	};

	let FixedDataTableCellDefault369 = function() {
		return (
			<div dataKey={'edit_status'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={33} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'edit_status'} height={32} rowIndex={0} style={{ height: 32, width: 33 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_4h2r'}>{''}</div>
					</div>
				</div>
			</div>
		);
	};

	let TransitionCell370 = function() {
		return <FixedDataTableCellDefault369 />;
	};

	let FixedDataTableCell371 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 33, left: 242 }}>
				{undefined}
				<TransitionCell370 />
			</div>
		);
	};

	let FixedDataTableCellDefault372 = function() {
		return (
			<div dataKey={'errors'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={36} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } } columnKey={'errors'}
					 height={32} rowIndex={0} style={{ height: 32, width: 36 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_4h2r'}></div>
					</div>
				</div>
			</div>
		);
	};

	let TransitionCell373 = function() {
		return <FixedDataTableCellDefault372 />;
	};

	let FixedDataTableCell374 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 36, left: 275 }}>
				{undefined}
				<TransitionCell373 />
			</div>
		);
	};

	let BUISwitch375 = function() {
		return (
			<div value={true} disabled={true} onToggle={function () { } } data-hover={'tooltip'} data-tooltip-position={'below'} aria-label={'Currently active and you can not deactivate it.'} animate={true}
					 className={'_128j _128k _128m _128n'} role={'checkbox'} aria-checked={'true'}>
				<div className={'_128o'} onClick={function () { } } onKeyDown={function () { } } onMouseDown={function () { } } tabIndex={'-1'}>
					<div className={'_128p'}></div>
				</div>
				{null}
			</div>
		);
	};

	let AdsStatusSwitchInternal376 = function() {
		return <BUISwitch375 />;
	};

	let AdsStatusSwitch377 = function() {
		return <AdsStatusSwitchInternal376 />;
	};

	let TransitionCell378 = function() {
		return (
			<div dataKey={'ad.adgroup_status'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={60} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'ad.adgroup_status'} height={32} rowIndex={0} style={{ height: 32, width: 60 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_15si _4h2r'}>
							<AdsStatusSwitch377 />
						</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell379 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 60, left: 311 }}>
				{undefined}
				<TransitionCell378 />
			</div>
		);
	};

	let ReactImage380 = function() {
		return <i aria-label={'Pending Review'} data-hover={'tooltip'} className={'_4ms8 img sp_UuU9HmrQ397 sx_ced63f'} src={null} width={'7'} height={'7'}></i>;
	};

	let AdsPEActivityStatusIndicator381 = function() {
		return (
			<div className={'_k4-'}>
				<ReactImage380 />
				{'Pending Review'}
				{undefined}
			</div>
		);
	};

	let TransitionCell382 = function() {
		return (
			<div dataKey={'ukiAdData.computed_activity_status'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={150} columnData={{}} cellDataGetter={function () { } }
					 cellRenderer={function () { } } columnKey={'ukiAdData.computed_activity_status'} height={32} rowIndex={0} style={{ height: 32, width: 150 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _4h2r'}>
							<AdsPEActivityStatusIndicator381 />
						</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell383 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 150, left: 371 }}>
				{undefined}
				<TransitionCell382 />
			</div>
		);
	};

	let FixedDataTableCellGroupImpl384 = function() {
		return (
			<div className={'_3pzj'} style={{ height: 32, position: 'absolute', width: 521, zIndex: 2, transform: 'translate3d(0px,0px,0)', backfaceVisibility: 'hidden' }}>
				<FixedDataTableCell364 key={'cell_0'}/>
				<FixedDataTableCell368 key={'cell_1'}/>
				<FixedDataTableCell371 key={'cell_2'}/>
				<FixedDataTableCell374 key={'cell_3'}/>
				<FixedDataTableCell379 key={'cell_4'}/>
				<FixedDataTableCell383 key={'cell_5'}/>
			</div>
		);
	};

	let FixedDataTableCellGroup385 = function() {
		return (
			<div style={{ height: 32, left: 0 }} className={'_3pzk'}>
				<FixedDataTableCellGroupImpl384 />
			</div>
		);
	};

	let TransitionCell386 = function() {
		return (
			<div dataKey={'stats.unique_impressions'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={60} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.unique_impressions'} height={32} rowIndex={0} style={{ height: 32, width: 60 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell387 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 60, left: 0 }}>
				{undefined}
				<TransitionCell386 />
			</div>
		);
	};

	let TransitionCell388 = function() {
		return (
			<div dataKey={'stats.impressions'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={80} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.impressions'} height={32} rowIndex={0} style={{ height: 32, width: 80 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell389 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 80, left: 60 }}>
				{undefined}
				<TransitionCell388 />
			</div>
		);
	};

	let TransitionCell390 = function() {
		return (
			<div dataKey={'stats.avg_cpm'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={80} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.avg_cpm'} height={32} rowIndex={0} style={{ height: 32, width: 80 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell391 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 80, left: 140 }}>
				{undefined}
				<TransitionCell390 />
			</div>
		);
	};

	let TransitionCell392 = function() {
		return (
			<div dataKey={'stats.avg_cpc'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={78} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.avg_cpc'} height={32} rowIndex={0} style={{ height: 32, width: 78 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell393 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 78, left: 220 }}>
				{undefined}
				<TransitionCell392 />
			</div>
		);
	};

	let TransitionCell394 = function() {
		return (
			<div dataKey={'stats.actions'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={140} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.actions'} height={32} rowIndex={0} style={{ height: 32, width: 140 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell395 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 140, left: 298 }}>
				{undefined}
				<TransitionCell394 />
			</div>
		);
	};

	let TransitionCell396 = function() {
		return (
			<div dataKey={'stats.cpa'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={140} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.cpa'} height={32} rowIndex={0} style={{ height: 32, width: 140 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell397 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 140, left: 438 }}>
				{undefined}
				<TransitionCell396 />
			</div>
		);
	};

	let TransitionCell398 = function() {
		return (
			<div dataKey={'stats.clicks'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={60} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.clicks'} height={32} rowIndex={0} style={{ height: 32, width: 60 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell399 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 60, left: 578 }}>
				{undefined}
				<TransitionCell398 />
			</div>
		);
	};

	let TransitionCell400 = function() {
		return (
			<div dataKey={'stats.ctr'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={70} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.ctr'} height={32} rowIndex={0} style={{ height: 32, width: 70 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell401 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 70, left: 638 }}>
				{undefined}
				<TransitionCell400 />
			</div>
		);
	};

	let TransitionCell402 = function() {
		return (
			<div dataKey={'stats.social_percent'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={80} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.social_percent'} height={32} rowIndex={0} style={{ height: 32, width: 80 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell403 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 80, left: 708 }}>
				{undefined}
				<TransitionCell402 />
			</div>
		);
	};

	let FixedDataTableCellDefault404 = function() {
		return (
			<div dataKey={'campaign.name'} className={'_4lgc _4h2u'} rowGetter={function() {
			} } width={100} columnData={{}} cellDataGetter={function() {
			} } cellRenderer={undefined}
				columnKey={'campaign.name'} height={32} rowIndex={0} style={{ height: 32, width: 100 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
					<div className={'_4h2r'}>{'Test Ad Set'}</div
					>
				</div>
			</div>
			</div>
		);
	};

	let TransitionCell405 = function() {
		return <FixedDataTableCellDefault404 />;
	};

	let FixedDataTableCell406 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 100, left: 788 }}>
				{undefined}
				<TransitionCell405 />
			</div>
		);
	};

	let FixedDataTableCellDefault407 = function() {
		return (
			<div dataKey={'campaignGroup.name'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={150} columnData={{}} cellDataGetter={function () { } } cellRenderer={undefined}
					 columnKey={'campaignGroup.name'} height={32} rowIndex={0} style={{ height: 32, width: 150 }}>
				<div className={'_4lgd _4h2w'}>
			<div className={'_4lge _4h2x'}>
				<div className={'_4h2r'}>{'Test Campaign'}</div>
			</div>
			</div>
			</div>
		);
	};

	let TransitionCell408 = function() {
		return <FixedDataTableCellDefault407 />;
	};

	let FixedDataTableCell409 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 150, left: 888 }}>
				{undefined}
				<TransitionCell408 />
			</div>
		);
	};

	let TransitionCell410 = function() {
		return (
			<div dataKey={'ad.id'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={120} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } } columnKey={'ad.id'}
					 height={32} rowIndex={0} style={{ height: 32, width: 120 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _4h2r'}>{'98010048849345'}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell411 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 120, left: 1038 }}>
				{undefined}
				<TransitionCell410 />
			</div>
		);
	};

	let TransitionCell412 = function() {
		return (
			<div dataKey={'campaignGroup.objective'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={80} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'campaignGroup.objective'} height={32} rowIndex={0} style={{ height: 32, width: 80 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
					<div className={'_2d6h _4h2r'}>{'Clicks to Website'}</div>
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell413 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 80, left: 1158 }}>
				{undefined}
				<TransitionCell412 />
			</div>
		);
	};

	let TransitionCell414 = function() {
		return (
			<div dataKey={'stats.spent_100'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={70} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'stats.spent_100'} height={32} rowIndex={0} style={{ height: 32, width: 70 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _2g7x _4h2r'}>{' — '}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell415 = function() {
		return (
			<div className={'_4lg0 _4lg5 _4h2p _4h2m'} style={{ height: 32, width: 70, left: 1238 }}>
				{undefined}
				<TransitionCell414 />
			</div>
		);
	};

	let ReactDate416 = function() {
		return <span>{'10/24/2015'}</span>;
	};

	let TransitionCell417 = function() {
		return (
			<div dataKey={'derivedCampaign.startDate'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={113} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'derivedCampaign.startDate'} height={32} rowIndex={0} style={{ height: 32, width: 113 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _4h2r'}>
							<ReactDate416 />
						</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell418 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 113, left: 1308 }}>
				{undefined}
				<TransitionCell417 />
			</div>
		);
	};

	let TransitionCell419 = function() {
		return (
			<div dataKey={'derivedCampaign.endDate'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={113} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'derivedCampaign.endDate'} height={32} rowIndex={0} style={{ height: 32, width: 113 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _4h2r'}>{'Ongoing'}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell420 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 113, left: 1421 }}>
				{undefined}
				<TransitionCell419 />
			</div>
		);
	};

	let ReactDate421 = function() {
		return <span>{'10/24/2015'}</span>;
	};

	let TransitionCell422 = function() {
		return (
			<div dataKey={'ad.created_time'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={113} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'ad.created_time'} height={32} rowIndex={0} style={{ height: 32, width: 113 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _4h2r'}>
							<ReactDate421 />
						</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell423 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 113, left: 1534 }}>
				{undefined}
				<TransitionCell422 />
			</div>
		);
	};

	let ReactDate424 = function() {
		return <span>{'10/24/2015'}</span>;
	};

	let TransitionCell425 = function() {
		return (
			<div dataKey={'ad.updated_time'} className={'_4lgc _4h2u'} rowGetter={function() {
			} } width={113} columnData={{}} cellDataGetter={function() {
			} } cellRenderer={function() {
			} }
				columnKey={'ad.updated_time'} height={32} rowIndex={0} style={{ height: 32, width: 113 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
					<div className={'_2d6h _4h2r'}>
						<ReactDate424 />
					</div>
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell426 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 113, left: 1647 }}>
				{undefined}
				<TransitionCell425 />
			</div>
		);
	};

	let TransitionCell427 = function() {
		return (
			<div dataKey={'ad.title'} className={'_4lgc _4h2u'} rowGetter={function() {
			} } width={80} columnData={{}} cellDataGetter={function() {
			} } cellRenderer={function() {
			} }
				columnKey={'ad.title'} height={32} rowIndex={0} style={{ height: 32, width: 80 }}>
			<div className={'_4lgd _4h2w'}>
				<div className={'_4lge _4h2x'}>
					<div className={'_2d6h _4h2r'}>{'Example'}</div>
				</div>
			</div>
			</div>
		);
	};

	let FixedDataTableCell428 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 80, left: 1760 }}>
				{undefined}
				<TransitionCell427 />
			</div>
		);
	};

	let TransitionCell429 = function() {
		return (
			<div dataKey={'ad.creative.body'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={80} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'ad.creative.body'} height={32} rowIndex={0} style={{ height: 32, width: 80 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _4h2r'}>{`It's an example.`}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell430 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 80, left: 1840 }}>
				{undefined}
				<TransitionCell429 />
			</div>
		);
	};

	let TransitionCell431 = function() {
		return (
			<div dataKey={'destination'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={92} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'destination'} height={32} rowIndex={0} style={{ height: 32, width: 92 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _4h2r'}></div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell432 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 92, left: 1920 }}>
				{undefined}
				<TransitionCell431 />
			</div>
		);
	};

	let TransitionCell433 = function() {
		return (
			<div dataKey={'ad.creative.link_url'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={70} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'ad.creative.link_url'} height={32} rowIndex={0} style={{ height: 32, width: 70 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _4h2r'}>{'http://www.example.com/'}</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell434 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 70, left: 2012 }}>
				{undefined}
				<TransitionCell433 />
			</div>
		);
	};

	let FixedDataTableCellDefault435 = function() {
		return (
			<div dataKey={'page'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={92} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } } columnKey={'page'}
					 height={32} rowIndex={0} style={{ height: 32, width: 92 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_4h2r'}></div>
					</div>
				</div>
			</div>
		);
	};

	let TransitionCell436 = function() {
		return <FixedDataTableCellDefault435 />;
	};

	let FixedDataTableCell437 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 92, left: 2082 }}>
				{undefined}
				<TransitionCell436 />
			</div>
		);
	};

	let Link438 = function() {
		return <a href={'https://www.facebook.com/?demo_ad=98010048849345&h=AQA24w3temAtB-5f#pagelet_ego_pane'} target={'_blank'} rel={undefined} onClick={function () { } }>{'Preview Ad'}</a>;
	};

	let ReactImage439 = function() {
		return <i src={null} className={'_541d img sp_R48dKBxiJkP sx_dc2cdb'}></i>;
	};

	let AdsPopoverLink440 = function() {
		return (
			<span onMouseEnter={function () { } } onMouseLeave={function () { } }>
				<span className={'_3o_j'}></span>
				<ReactImage439 />
			</span>
		);
	};

	let AdsHelpLink441 = function() {
		return <AdsPopoverLink440 />;
	};

	let TransitionCell442 = function() {
		return (
			<div dataKey={'ad.demolink_hash'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={100} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'ad.demolink_hash'} height={32} rowIndex={0} style={{ height: 32, width: 100 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_4h2r'}>
							<Link438 />
							<AdsHelpLink441 />
						</div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell443 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 100, left: 2174 }}>
				{undefined}
				<TransitionCell442 />
			</div>
		);
	};

	let TransitionCell444 = function() {
		return (
			<div dataKey={'scrollbar_spacer'} className={'_4lgc _4h2u'} rowGetter={function () { } } width={25} columnData={{}} cellDataGetter={function () { } } cellRenderer={function () { } }
					 columnKey={'scrollbar_spacer'} height={32} rowIndex={0} style={{ height: 32, width: 25 }}>
				<div className={'_4lgd _4h2w'}>
					<div className={'_4lge _4h2x'}>
						<div className={'_2d6h _4h2r'}></div>
					</div>
				</div>
			</div>
		);
	};

	let FixedDataTableCell445 = function() {
		return (
			<div className={'_4lg0 _4h2m'} style={{ height: 32, width: 25, left: 2274 }}>
				{undefined}
				<TransitionCell444 />
			</div>
		);
	};

	let FixedDataTableCellGroupImpl446 = function() {
		return (
			<div className={'_3pzj'} style={{ height: 32, position: 'absolute', width: 2299, zIndex: 0, transform: 'translate3d(0px,0px,0)', backfaceVisibility: 'hidden' }}>
				<FixedDataTableCell387 key={'cell_0'}/>
				<FixedDataTableCell389 key={'cell_1'}/>
				<FixedDataTableCell391 key={'cell_2'}/>
				<FixedDataTableCell393 key={'cell_3'}/>
				<FixedDataTableCell395 key={'cell_4'}/>
				<FixedDataTableCell397 key={'cell_5'}/>
				<FixedDataTableCell399 key={'cell_6'}/>
				<FixedDataTableCell401 key={'cell_7'}/>
				<FixedDataTableCell403 key={'cell_8'}/>
				<FixedDataTableCell406 key={'cell_9'}/>
				<FixedDataTableCell409 key={'cell_10'}/>
				<FixedDataTableCell411 key={'cell_11'}/>
				<FixedDataTableCell413 key={'cell_12'}/>
				<FixedDataTableCell415 key={'cell_13'}/>
				<FixedDataTableCell418 key={'cell_14'}/>
				<FixedDataTableCell420 key={'cell_15'}/>
				<FixedDataTableCell423 key={'cell_16'}/>
				<FixedDataTableCell426 key={'cell_17'}/>
				<FixedDataTableCell428 key={'cell_18'}/>
				<FixedDataTableCell430 key={'cell_19'}/>
				<FixedDataTableCell432 key={'cell_20'}/>
				<FixedDataTableCell434 key={'cell_21'}/>
				<FixedDataTableCell437 key={'cell_22'}/>
				<FixedDataTableCell443 key={'cell_23'}/>
				<FixedDataTableCell445 key={'cell_24'}/>
			</div>
		);
	};

	let FixedDataTableCellGroup447 = function() {
		return (
			<div style={{ height: 32, left: 521 }} className={'_3pzk'}>
				<FixedDataTableCellGroupImpl446 />
			</div>
		);
	};

	let FixedDataTableRowImpl448 = function() {
		return (
			<div className={'_1gd4 _4li _52no _35m0 _35m1 _3c7k _4efq _4efs'} onClick={null} onDoubleClick={null} onMouseDown={function () { } } onMouseEnter={null} onMouseLeave={null}
					 style={{ width: 1083, height: 32 }}>
				<div className={'_1gd5'}>
					<FixedDataTableCellGroup385 key={'fixed_cells'}/>
					<FixedDataTableCellGroup447 key={'scrollable_cells'}/>
					<div className={'_1gd6 _1gd8'} style={{ left: 521, height: 32 }}></div>
				</div>
			</div>
		);
	};

	let FixedDataTableRow449 = function() {
		return (
			<div style={{ width: 1083, height: 32, zIndex: 0, transform: 'translate3d(0px,0px,0)', backfaceVisibility: 'hidden' }} className={'_1gda'}>
				<FixedDataTableRowImpl448 />
			</div>
		);
	};

	let FixedDataTableBufferedRows450 = function() {
		return (
			<div style={{ position: 'absolute', pointerEvents: 'auto', transform: 'translate3d(0px,65px,0)', backfaceVisibility: 'hidden' }}>
				<FixedDataTableRow449 key={'0'}/>
			</div>
		);
	};

	let Scrollbar451 = function() {
		return (
			<div onFocus={function () { } } onBlur={function () { } } onKeyDown={function () { } } onMouseDown={function () { } } onWheel={function () { } } className={'_1t0r _1t0t _4jdr _1t0u'}
					 style={{ width: 1083, zIndex: 99 }} tabIndex={0}>
				<div style={{ width: 407.918085106383, transform: 'translate3d(4px,0px,0)', backfaceVisibility: 'hidden' }}></div>
			</div>
		);
	};

	let HorizontalScrollbar452 = function() {
		return (
			<div className={'_3h1k _3h1m'} style={{ height: 15, width: 1083 }}>
				<div style={{ height: 15, position: 'absolute', overflow: 'hidden', width: 1083, transform: 'translate3d(0px,0px,0)', backfaceVisibility: 'hidden' }}>
					<Scrollbar451 />
				</div>
			</div>
		);
	};

	let FixedDataTable453 = function() {
		return (
			<div className={'_3h1i _1mie'} onWheel={function () { } } style={{ height: 532, width: 1083 }}>
				<div className={'_3h1j'} style={{ height: 515, width: 1083 }}>
					<FixedDataTableColumnResizeHandle178 />
					<FixedDataTableRow206 key={'group_header'}/>
					<FixedDataTableRow360 key={'header'}/>
					<FixedDataTableBufferedRows450 />
					{null}
					{undefined}
					{undefined}
				</div>
				{undefined}
				<HorizontalScrollbar452 />
			</div>
		);
	};

	let TransitionTable454 = function() {
		return <FixedDataTable453 />;
	};

	let AdsSelectableFixedDataTable455 = function() {
		return (
			<div className={'_5hht'}>
				<TransitionTable454 />
			</div>
		);
	};

	let AdsDataTableKeyboardSupportDecorator456 = function() {
		return (
			<div onKeyDown={function () { } }>
				<AdsSelectableFixedDataTable455 />
			</div>
		);
	};

	let AdsEditableDataTableDecorator457 = function() {
		return (
			<div onCopy={function () { } }>
				<AdsDataTableKeyboardSupportDecorator456 />
			</div>
		);
	};

	let AdsPEDataTableContainer458 = function() {
		return (
			<div className={'_35l_'}>
				{null}
				{null}
				<AdsEditableDataTableDecorator457 />
			</div>
		);
	};

	let ResponsiveBlock459 = function() {
		return (
			<div onResize={function () { } } className={'_4u-c'}>
				<AdsPEDataTableContainer458 />
				<div key={'sensor'} className={'_4u-f'}>
					<iframe tabIndex={'-1'}></iframe>
				</div>
			</div>
		);
	};

	let AdsPEAdTableContainer460 = function() {
		return <ResponsiveBlock459 />;
	};

	let AdsPEManageAdsPaneContainer461 = function() {
		return (
			<div className={'_2utw'}>
				{null}
				<div className={'_2utx _41tt'}>
					<AdsPEFilterContainer104 />
					<AdsPECampaignTimeLimitNoticeContainer106 />
					{null}
				</div>
				<div className={' _41ts'}>
					<AdsPEAdgroupToolbarContainer169 />
				</div>
				<div className={'_2utz'}>
					<div className={'_2ut-'}>
						<AdsPEOrganizerContainer177 />
					</div>
					<div className={'_2ut_'}>
						<AdsPEAdTableContainer460 />
					</div>
				</div>
			</div>
		);
	};

	let AdsPEContentContainer462 = function() {
		return <AdsPEManageAdsPaneContainer461 />;
	};

	let FluxContainer_r_463 = function() {
		return (
			<div className={'mainWrapper'} style={{ width: 1192 }}>
				<FluxContainer_r_69 />
				<AdsPEContentContainer462 />
				{null}
			</div>
		);
	};

	let FluxContainer_q_464 = function() {
		return null;
	};

	let AdsPEUploadDialog465 = function() {
		return null;
	};

	let FluxContainer_y_466 = function() {
		return <AdsPEUploadDialog465 />;
	};

	let ReactImage467 = function() {
		return <i className={'_1-lx img sp_UuU9HmrQ397 sx_990b54'} src={null}></i>;
	};

	let AdsPESideTrayTabButton468 = function() {
		return (
			<div onClick={function () { } } className={'_1-ly _59j9 _d9a'}>
				<ReactImage467 />
				<div className={'_vf7'}></div>
				<div className={'_vf8'}></div>
			</div>
		);
	};

	let AdsPEEditorTrayTabButton469 = function() {
		return <AdsPESideTrayTabButton468 />;
	};

	let ReactImage470 = function() {
		return <i className={'_1-lx img sp_UuU9HmrQ397 sx_94017f'} src={null}></i>;
	};

	let AdsPESideTrayTabButton471 = function() {
		return (
			<div onClick={function () { } } className={' _1-lz _d9a'}>
				<ReactImage470 />
				<div className={'_vf7'}></div>
				<div className={'_vf8'}></div>
			</div>
		);
	};

	let AdsPEInsightsTrayTabButton472 = function() {
		return <AdsPESideTrayTabButton471 />;
	};

	let AdsPESideTrayTabButton473 = function() {
		return null;
	};

	let AdsPENekoDebuggerTrayTabButton474 = function() {
		return <AdsPESideTrayTabButton473 />;
	};

	let FBDragHandle475 = function() {
		return <div style={{ height: 550 }} className={'_4a2j _2ciy _2ciz'} horizontal={true} onStart={function () { } } onEnd={function () { } } onChange={function () { } }
								initialData={function () { } } vertical={false} throttle={25} delay={0} threshold={0} onMouseDown={function () { } } onMouseUp={function () { } }
								onMouseLeave={function () { } }></div>;
	};

	let XUIText476 = function() {
		return <span size={'large'} weight={'bold'} className={'_2x9f  _50f5 _50f7'} display={'inline'}>{'Editing Ad'}</span>;
	};

	let XUIText477 = function() {
		return <span size={'large'} weight={'bold'} display={'inline'} className={' _50f5 _50f7'}>{'Test Ad'}</span>;
	};

	let AdsPEEditorChildLink478 = function() {
		return null;
	};

	let AdsPEEditorChildLinkContainer479 = function() {
		return <AdsPEEditorChildLink478 />;
	};

	let AdsPEHeaderSection480 = function() {
		return (
			<div className={'_yke'}>
				<div className={'_2x9d _pry'}></div>
				<XUIText476 />
				<div className={'_3a-a'}>
					<div className={'_3a-b'}>
						<XUIText477 />
					</div>
				</div>
				{null}
				<AdsPEEditorChildLinkContainer479 />
			</div>
		);
	};

	let AdsPEAdgroupHeaderSectionContainer481 = function() {
		return <AdsPEHeaderSection480 />;
	};

	let AdsPEAdgroupDisapprovalMessage482 = function() {
		return null;
	};

	let FluxContainer_r_483 = function() {
		return <AdsPEAdgroupDisapprovalMessage482 />;
	};

	let AdsPEAdgroupAutoNamingConfirmationContainer484 = function() {
		return null;
	};

	let AdsLabeledField485 = function() {
		return (
			<div className={'_5ir9 _3bvz'} label={'Ad Name'} labelSize={'small'}>
				<label className={'_4el4 _3qwj _3hy-'} htmlFor={undefined}>
					{'Ad Name'}
					{' '}
					{undefined}
				</label>
				{null}
				<div className={'_3bv-'}></div>
			</div>
		);
	};

	let ReactXUIError486 = function() {
		return (
			<div className={'_5ira _2vl4 _1h18'}>
				{null}
				{null}
				<div className={'_2vl9 _1h1f'} style={{ backgroundColor: '#fff' }}>
					<div className={'_2vla _1h1g'}>
						<div>
							{null}
							<textarea value={'Test Ad'}/>
							{null}
						</div>
						<div className={'_2vlk'}></div>
					</div>
				</div>
				{null}
			</div>
		);
	};

	let AdsTextInput487 = function() {
		return <ReactXUIError486 />;
	};

	let Link488 = function() {
		return <a className={'_5ir9'} label={'Rename using available fields'} onMouseDown={function () { } } href={'#'} rel={undefined} onClick={function () { } }>{'Rename using available fields'}</a>;
	};

	let AdsAutoNamingTemplateDialog489 = function() {
		return <Link488 />;
	};

	let AdsPEAmbientNUXMegaphone490 = function() {
		return (
			<span >
				<AdsAutoNamingTemplateDialog489 />
			</span>
		);
	};

	let AdsLabeledField491 = function() {
		return (
			<div className={'_5ir9 _3bvz'} label={'Status'} labelSize={'small'}>
				<label className={'_4el4 _3qwj _3hy-'} htmlFor={undefined}>
					{'Status'}
					{' '}
					{undefined}
				</label>
				{null}
				<div className={'_3bv-'}></div>
			</div>
		);
	};

	let BUISwitch492 = function() {
		return (
			<div value={true} disabled={true} onToggle={function() {
			} } data-hover={'tooltip'} data-tooltip-position={'below'} aria-label={'Currently active and you can not deactivate it.'} animate={true}
				className={'_128j _128k _128m _128n'} role={'checkbox'} aria-checked={'true'}>
			<div className={'_128o'} onClick={function () { } } onKeyDown={function () { } } onMouseDown={function () { } } tabIndex={'-1'}>
				<div className={'_128p'}></div>
			</div>
				{null}
			</div>
		);
	};

	let AdsStatusSwitchInternal493 = function() {
		return <BUISwitch492 />;
	};

	let AdsStatusSwitch494 = function() {
		return <AdsStatusSwitchInternal493 />;
	};

	let LeftRight495 = function() {
		return (
			<div className={'clearfix'}>
				<div key={'left'} className={'_ohe lfloat'}>
					<div>
						<AdsLabeledField485 />
						<span className={'_5irl'}>
							<AdsTextInput487 key={'nameEditor98010048849345'}/>
							<AdsPEAmbientNUXMegaphone490 />
						</span>
					</div>
				</div>
				<div key={'right'} className={'_ohf rfloat'}>
					<div>
						<AdsLabeledField491 />
						<div className={'_5irp'}>
							<AdsStatusSwitch494 />
						</div>
					</div>
				</div>
			</div>
		);
	};

	let XUICard496 = function() {
		return (
			<div className={'_5ir8 _12k2 _4-u2  _4-u8'} xuiErrorPosition={'above'} background={'white'}>
				<LeftRight495 />
			</div>
		);
	};

	let ReactXUIError497 = function() {
		return <XUICard496 />;
	};

	let AdsCard498 = function() {
		return <ReactXUIError497 />;
	};

	let AdsPENameSection499 = function() {
		return <AdsCard498 />;
	};

	let AdsPEAdgroupNameSectionContainer500 = function() {
		return <AdsPENameSection499 />;
	};

	let XUICardHeaderTitle501 = function() {
		return (
			<span itemComponent={'span'} className={'_38my'}>
				{'Ad Links'}
				{null}
				<span className={'_c1c'}></span>
			</span>
		);
	};

	let XUICardSection502 = function() {
		return (
			<div className={'_5dw9 _5dwa _4-u3'} background={'transparent'}>
				{[
					<XUICardHeaderTitle501 key={'/.0'}/>,
				]}
				{undefined}
				{undefined}
				<div className={'_3s3-'}></div>
			</div>
		);
	};

	let XUICardHeader503 = function() {
		return <XUICardSection502 />;
	};

	let AdsCardHeader504 = function() {
		return <XUICardHeader503 />;
	};

	let XUIText505 = function() {
		return <div className={'_502s'} display={'block'} size={'inherit'} weight={'inherit'}>{'Ad ID 98010048849345'}</div>;
	};

	let Link506 = function() {
		return <a target={'_blank'} href={'/ads/manager/ad/?ids=98010048849345'} onClick={function () { } } rel={undefined}>{'Open in Ads Manager'}</a>;
	};

	let Link507 = function() {
		return <a target={'_blank'} href={'#'} onClick={function () { } } rel={undefined}>{'Open in Ads Reporting'}</a>;
	};

	let Link508 = function() {
		return <a target={'_blank'} href={'https://www.facebook.com/?demo_ad=98010048849345&h=AQA24w3temAtB-5f#pagelet_ego_pane'} onClick={function () { } }
							rel={undefined}>{'View on Desktop Right Column'}</a>;
	};

	let Link509 = function() {
		return <a target={'_blank'} href={'/ads/manage/powereditor/?act=10149999073643408&adgroup=98010048849345'} onClick={function () { } }
							rel={undefined}>{'Open Power Editor with this ad selected'}</a>;
	};

	let List510 = function() {
		return (
			<ul spacing={'small'} border={'none'} direction={'vertical'} valign={'top'} className={'uiList _4kg _6-i _6-h _704'}>
				{null}
			<li key={'/ads/manager/ad/?ids=98010048849345'}>
				<Link506 />
			</li>
			<li key={'#'}>
				<Link507 />
			</li>
				{null}
			<li key={'https://www.facebook.com/?demo_ad=98010048849345&h=AQA24w3temAtB-5f#pagelet_ego_pane'}>
				<Link508 />
			</li>
				{null}
				{null}
				{null}
			<li key={'/ads/manage/powereditor/?act=10149999073643408&adgroup=98010048849345'}>
				<Link509 />
			</li>
				{null}
			</ul>
		);
	};

	let XUICardSection511 = function() {
		return (
		<div className={'_12jy _4-u3'} background={'transparent'}>
				<div className={'_3-8j'}>
					<XUIText505 />
		<List510 />
		</div>
		</div>
		);
	};

	let AdsCardSection512 = function() {
		return <XUICardSection511 />;
	};

	let XUICard513 = function() {
		return (
			<div xuiErrorPosition={'above'} className={'_12k2 _4-u2  _4-u8'} background={'white'}>
				<AdsCardHeader504 />
				<AdsCardSection512 />
			</div>
		);
	};

	let ReactXUIError514 = function() {
		return <XUICard513 />;
	};

	let AdsCard515 = function() {
		return <ReactXUIError514 />;
	};

	let AdsPELinkList516 = function() {
		return <AdsCard515 />;
	};

	let AdsPEAdgroupLinksSection517 = function() {
		return <AdsPELinkList516 />;
	};

	let AdsPEAdgroupLinksSectionContainer518 = function() {
		return (
			<div>
				<AdsPEAdgroupLinksSection517 />
				{null}
			</div>
		);
	};

	let XUICardHeaderTitle519 = function() {
		return (
			<span itemComponent={'span'} className={'_38my'}>
				{'Preview'}
				{null}
				<span className={'_c1c'}></span>
			</span>
		);
	};

	let XUICardSection520 = function() {
		return (
			<div className={'_5dw9 _5dwa _4-u3'} background={'transparent'}>
				{[
					<XUICardHeaderTitle519 key={'/.0'}/>,
				]}
				{undefined}
				{undefined}
				<div className={'_3s3-'}></div>
			</div>
		);
	};

	let XUICardHeader521 = function() {
		return <XUICardSection520 />;
	};

	let AdsCardHeader522 = function() {
		return <XUICardHeader521 />;
	};

	let PillButton523 = function() {
		return <a label={null} selected={true} onClick={function () { } } href={'#'} className={'uiPillButton uiPillButtonSelected'}>{'Desktop Right Column'}</a>;
	};

	let List524 = function() {
		return (
			<ul className={'uiList  _4ki _509- _6-i _6-h _704'} border={'none'} direction={'horizontal'} spacing={'small'} valign={'top'}>
				<li key={'0/.$RIGHT_COLUMN_STANDARD'}>
					<PillButton523 key={'RIGHT_COLUMN_STANDARD'}/>
				</li>
			</ul>
		);
	};

	let PillList525 = function() {
		return <List524 />;
	};

	let XUICardSection526 = function() {
		return (
			<div background={'light-wash'} className={'_14p9 _12jy _4-u3  _57d8'}>
				<div className={'_3-8j'}>
					<PillList525 />
				</div>
			</div>
		);
	};

	let AdsCardSection527 = function() {
		return <XUICardSection526 />;
	};

	let AdsPEPreviewPillList528 = function() {
		return <AdsCardSection527 />;
	};

	let XUISpinner529 = function() {
		return <span size={'large'} className={'hidden_elem img _55ym _55yq _55yo'} showOnAsync={false} background={'light'} aria-label={'Loading...'} aria-busy={true}/>;
	};

	let ReactImage530 = function() {
		return (
			<i alt={'Warning'} className={'_585p img sp_R48dKBxiJkP sx_aed870'} src={null}>
				<u>{'Warning'}</u>
			</i>
		);
	};

	let XUINotice531 = function() {
		return (
			<div size={'medium'} className={'_585n _585o'}>
				<ReactImage530 />
				{null}
				<div className={'_585r _50f4'}>{'Unable to display a preview for this ad.'}</div>
			</div>
		);
	};

	let AdPreview532 = function() {
		return (
			<div className={'_2hm6'}>
				<div className={undefined}>
					<div className={'_3akw'}>
						<XUISpinner529 />
					</div>
					<div className={'hidden_elem'}>
						<XUINotice531 />
					</div>
					<div className={''}></div>
				</div>
			</div>
		);
	};

	let XUICardSection533 = function() {
		return (
			<div className={'_3m4g _12jy _4-u3'} style={{ maxHeight: '425px' }} background={'transparent'}>
				<div className={'_3-8j'}>
					<div className={'_14p7'}>
						<div className={'_14p8'}>
							<AdPreview532 />
						</div>
					</div>
				</div>
			</div>
		);
	};

	let AdsCardSection534 = function() {
		return <XUICardSection533 />;
	};

	let AdsPEPreview535 = function() {
		return (
			<div>
				<AdsPEPreviewPillList528 />
				{undefined}
				<AdsCardSection534 />
			</div>
		);
	};

	let AdsPEStandardPreview536 = function() {
		return <AdsPEPreview535 />;
	};

	let AdsPEStandardPreviewContainer537 = function() {
		return <AdsPEStandardPreview536 />;
	};

	let XUICard538 = function() {
		return (
			<div xuiErrorPosition={'above'} className={'_12k2 _4-u2  _4-u8'} background={'white'}>
				<AdsCardHeader522 />
				{null}
				<AdsPEStandardPreviewContainer537 />
			</div>
		);
	};

	let ReactXUIError539 = function() {
		return <XUICard538 />;
	};

	let AdsCard540 = function() {
		return <ReactXUIError539 />;
	};

	let AdsPEAdgroupPreviewSection541 = function() {
		return <AdsCard540 />;
	};

	let AdsPEAdgroupPreviewSectionContainer542 = function() {
		return <AdsPEAdgroupPreviewSection541 />;
	};

	let AdsPEStickyArea543 = function() {
		return (
			<div>
				{null}
				<div >
					<AdsPEAdgroupPreviewSectionContainer542 />
				</div>
			</div>
		);
	};

	let XUICardHeaderTitle544 = function() {
		return (
			<span itemComponent={'span'} className={'_38my'}>
				{'Facebook Page'}
				{null}
				<span className={'_c1c'}></span>
			</span>
		);
	};

	let XUICardSection545 = function() {
		return (
			<div className={'_5dw9 _5dwa _4-u3'} background={'transparent'}>
				{[
					<XUICardHeaderTitle544 key={'/.0'}/>,
				]}
				{undefined}
				{undefined}
				<div className={'_3s3-'}></div>
			</div>
		);
	};

	let XUICardHeader546 = function() {
		return <XUICardSection545 />;
	};

	let AdsCardHeader547 = function() {
		return <XUICardHeader546 />;
	};

	let Link548 = function() {
		return <a className={'fwb'} onClick={function () { } } href={'#'} rel={undefined}>{'Connect a Facebook Page'}</a>;
	};

	let AdsPEWebsiteNoPageDestinationSection549 = function() {
		return (
			<div>
				<div className={'_3-95'}>{'This ad is not connected to a Facebook Page. It will not show in News Feed.'}</div>
				<Link548 />
			</div>
		);
	};

	let AdsPEWebsiteNoPageDestinationSectionContainer550 = function() {
		return <AdsPEWebsiteNoPageDestinationSection549 />;
	};

	let XUICardSection551 = function() {
		return (
			<div className={'_12jy _4-u3'} background={'transparent'}>
				<div className={'_3-8j'}>
					<AdsPEWebsiteNoPageDestinationSectionContainer550 />
				</div>
			</div>
		);
	};

	let AdsCardSection552 = function() {
		return <XUICardSection551 />;
	};

	let XUICard553 = function() {
		return (
			<div xuiErrorPosition={'above'} className={'_12k2 _4-u2  _4-u8'} background={'white'}>
				<AdsCardHeader547 />
				<AdsCardSection552 />
			</div>
		);
	};

	let ReactXUIError554 = function() {
		return <XUICard553 />;
	};

	let AdsCard555 = function() {
		return <ReactXUIError554 />;
	};

	let AdsPEAdgroupDestinationSection556 = function() {
		return <AdsCard555 />;
	};

	let AdsPEAdgroupDestinationSectionContainer557 = function() {
		return <AdsPEAdgroupDestinationSection556 />;
	};

	let XUICardHeaderTitle558 = function() {
		return (
			<span itemComponent={'span'} className={'_38my'}>
				{'Creative'}
				{null}
				<span className={'_c1c'}/>
			</span>
		);
	};

	let XUICardSection559 = function() {
		return (
			<div className={'_5dw9 _5dwa _4-u3'} background={'transparent'}>
				{[
					<XUICardHeaderTitle558 key={'/.0'}/>,
				]}
				{undefined}
				{undefined}
				<div className={'_3s3-'}></div>
			</div>
		);
	};

	let XUICardHeader560 = function() {
		return <XUICardSection559 />;
	};

	let AdsCardHeader561 = function() {
		return <XUICardHeader560 />;
	};

	let ReactImage562 = function() {
		return <i src={null} className={'_541d img sp_R48dKBxiJkP sx_dc2cdb'}/>;
	};

	let AdsPopoverLink563 = function() {
		return (
			<span onMouseEnter={function () { } } onMouseLeave={function () { } }>
				<span className={'_3o_j'}/>
				<ReactImage562 />
			</span>
		);
	};

	let AdsHelpLink564 = function() {
		return <AdsPopoverLink563 />;
	};

	let AdsLabeledField565 = function() {
		return (
			<div htmlFor={undefined} label={'Website URL'} helpText={'Enter the website URL you want to promote. Ex: http://www.example.com/page'} helpLinger={undefined} optional={undefined}
					 labelSize={'small'} className={'_3bvz'}>
				<label className={'_4el4 _3qwj _3hy-'} htmlFor={undefined}>
					{'Website URL'}
					{' '}
					{undefined}
				</label>
				<AdsHelpLink564 />
				<div className={'_3bv-'}></div>
			</div>
		);
	};

	let ReactXUIError566 = function() {
		return (
			<div className={'_gon _2vl4 _1h18'}>
				<div className={'_2vln'}>{1001}</div>
				<AdsLabeledField565 />
				<div className={'_2vl9 _1h1f'} style={{ backgroundColor: '#fff' }}>
					<div className={'_2vla _1h1g'}>
						<div>
							{null}
							<textarea value={'http://www.example.com/'}/>
							{null}
						</div>
						<div className={'_2vlk'}></div>
					</div>
				</div>
				{null}
			</div>
		);
	};

	let AdsTextInput567 = function() {
		return <ReactXUIError566 />;
	};

	let AdsBulkTextInput568 = function() {
		return <AdsTextInput567 />;
	};

	let AdsPEWebsiteURLField569 = function() {
		return <AdsBulkTextInput568 />;
	};

	let ReactImage570 = function() {
		return <i src={null} className={'_541d img sp_R48dKBxiJkP sx_dc2cdb'}/>;
	};

	let AdsPopoverLink571 = function() {
		return (
			<span onMouseEnter={function () { } } onMouseLeave={function () { } }>
				<span className={'_3o_j'}/>
				<ReactImage570 />
			</span>
		);
	};

	let AdsHelpLink572 = function() {
		return <AdsPopoverLink571 />;
	};

	let AdsLabeledField573 = function() {
		return (
			<div htmlFor={undefined} label={'Headline'}
					 helpText={'Your headline text will appear differently depending on the placement of your ad. Check the previews to make sure your headline looks the way you want in the placements it appears in.'}
					 helpLinger={undefined} optional={undefined} labelSize={'small'} className={'_3bvz'}>
				<label className={'_4el4 _3qwj _3hy-'} htmlFor={undefined}>
					{'Headline'}
					{' '}
					{undefined}
				</label>
				<AdsHelpLink572 />
				<div className={'_3bv-'}></div>
			</div>
		);
	};

	let ReactXUIError574 = function() {
		return (
			<div className={'_gon _2vl4 _1h18'}>
				<div className={'_2vln'}>{18}</div>
				<AdsLabeledField573 />
				<div className={'_2vl9 _1h1f'} style={{ backgroundColor: '#fff' }}>
					<div className={'_2vla _1h1g'}>
						<div>
							{null}
							<textarea value={'Example'}/>
							{null}
						</div>
						<div className={'_2vlk'}></div>
					</div>
				</div>
				{null}
			</div>
		);
	};

	let AdsTextInput575 = function() {
		return <ReactXUIError574 />;
	};

	let AdsBulkTextInput576 = function() {
		return <AdsTextInput575 />;
	};

	let AdsPEHeadlineField577 = function() {
		return <AdsBulkTextInput576 />;
	};

	let AdsLabeledField578 = function() {
		return (
			<div htmlFor={undefined} label={'Text'} helpText={undefined} helpLinger={undefined} optional={undefined} labelSize={'small'} className={'_3bvz'}>
				<label className={'_4el4 _3qwj _3hy-'} htmlFor={undefined}>
					{'Text'}
					{' '}
					{undefined}
				</label>
				{null}
				<div className={'_3bv-'}></div>
			</div>
		);
	};

	let ReactXUIError579 = function() {
		return (
			<div className={'_gon _2vl4 _2vl6 _1h18 _1h1a'}>
				<div className={'_2vln'}>{74}</div>
				<AdsLabeledField578 />
				<div className={'_2vl9 _1h1f'} style={{ backgroundColor: '#fff' }}>
					<div className={'_2vla _1h1g'}>
						<div>
							{null}
							<textarea value={`It' s an example.`}/>
							{null}
						</div>
						<div className={'_2vlk'}></div>
					</div>
				</div>
				{null}
			</div>
		);
	};

	let AdsTextInput580 = function() {
		return <ReactXUIError579 />;
	};

	let AdsBulkTextInput581 = function() {
		return <AdsTextInput580 />;
	};

	let AdsPEMessageField582 = function() {
		return (
			<div>
				<AdsBulkTextInput581 />
				{null}
			</div>
		);
	};

	let AbstractButton583 = function() {
		return (
			<button label={null} onClick={function () { } } size={'large'} use={'default'} borderShade={'light'} suppressed={false} className={'_4jy0 _4jy4 _517h _51sy _42ft'} type='submit' value={'1'}>
				{undefined}
				{'Change Image'}
				{undefined}
			</button>
		);
	};

	let XUIButton584 = function() {
		return <AbstractButton583 />;
	};

	let BackgroundImage585 = function() {
		return (
			<div src={'https://scontent.xx.fbcdn.net/hads-xap1/t45.1600-4/12124737_98010048849339_1665004369_n.png'} width={114.6} height={60} backgroundSize={'contain'} optimizeResizeSpeed={false}
					 loadingIndicatorStyle={'none'} className={'_5f0d'} style={{ width: '114.6px', height: '60px' }} onContextMenu={undefined}>
				<img alt={''} className={'_5i4g'} style={{ width: '90px', height: '60px', left: '12px', top: '0px' }}
						 src={'https://scontent.xx.fbcdn.net/hads-xap1/t45.1600-4/12124737_98010048849339_1665004369_n.png'}/>
				{undefined}
				{null}
			</div>
		);
	};

	let XUIText586 = function() {
		return <span shade={'light'} className={'_50f8'} size={'inherit'} weight={'inherit'} display={'inline'}>{'1000 × 667'}</span>;
	};

	let XUIGrayText587 = function() {
		return <XUIText586 />;
	};

	let XUIText588 = function() {
		return (
			<div className={'_3-95  _50f7'} display={'block'} weight={'bold'} size={'inherit'}>
				{'untitled – '}
				<XUIGrayText587 />
				{''}
			</div>
		);
	};

	let CenteredContainer589 = function() {
		return (
			<div className={'_50vi'} horizontal={false} vertical={true} fullHeight={false}>
				<div className={'_3bwv'}>
					<div className={'_3bwy'}>
						<div key={'/.0'} className={'_3bwx'}>
							<XUIText588 />
						</div>
						<div key={'/.1'} className={'_3bwx'}></div>
					</div>
				</div>
			</div>
		);
	};

	let Link590 = function() {
		return <a href={'/business/ads-guide/'} target={'_blank'} rel={undefined} onClick={function () { } }>{'Facebook Ad Guidelines'}</a>;
	};

	let XUIText591 = function() {
		return (
			<div className={'_3-96'} display={'block'} size={'inherit'} weight={'inherit'}>
				{'For questions and more information, see the '}
				<Link590 />
				{'.'}
			</div>
		);
	};

	let AdsImageInput592 = function() {
		return (
			<div>
				<div>
					<XUIButton584 />
					{undefined}
				</div>
				{null}
				<div className={'_50vh _3-8n _2ph_'}>
					<div className={'_37xq'}>
						<div className={'_3-90'}>
							<div className={' _1yi2'} onContextMenu={undefined}>
								<BackgroundImage585 />
							</div>
						</div>
						<CenteredContainer589 />
					</div>
					{null}
				</div>
				<XUIText591 />
				{null}
			</div>
		);
	};

	let AdsBulkImageInput593 = function() {
		return <AdsImageInput592 />;
	};

	let AdsLabeledField594 = function() {
		return (
			<div className={'_3-96 _3bvz'} label={'Image'} labelSize={'small'}>
				<label className={'_4el4 _3qwj _3hy-'} htmlFor={undefined}>
					{'Image'}
					{' '}
					{undefined}
				</label>
				{null}
				<div className={'_3bv-'}>
					<AdsBulkImageInput593 />
				</div>
			</div>
		);
	};

	let AdsPEImageSelector595 = function() {
		return <AdsLabeledField594 />;
	};

	let AdsPEImageSelectorContainer596 = function() {
		return <AdsPEImageSelector595 />;
	};

	let AdsPEWebsiteNoPageCreative597 = function() {
		return (
			<div>
				<AdsPEWebsiteURLField569 />
				<AdsPEHeadlineField577 />
				<AdsPEMessageField582 />
				<AdsPEImageSelectorContainer596 />
			</div>
		);
	};

	let AdsPEWebsiteNoPageCreativeContainer598 = function() {
		return <AdsPEWebsiteNoPageCreative597 />;
	};

	let XUICardSection599 = function() {
		return (
			<div className={'_12jy _4-u3'} background={'transparent'}>
				<div className={'_3-8j'}>
					<div></div>
					<AdsPEWebsiteNoPageCreativeContainer598 />
				</div>
			</div>
		);
	};

	let AdsCardSection600 = function() {
		return <XUICardSection599 />;
	};

	let XUICard601 = function() {
		return (
			<div xuiErrorPosition={'above'} className={'_12k2 _4-u2  _4-u8'} background={'white'}>
				<AdsCardHeader561 />
				<AdsCardSection600 />
			</div>
		);
	};

	let ReactXUIError602 = function() {
		return <XUICard601 />;
	};

	let AdsCard603 = function() {
		return <ReactXUIError602 />;
	};

	let AdsPEAdgroupCreativeSection604 = function() {
		return <AdsCard603 />;
	};

	let AdsPEAdgroupCreativeSectionContainer605 = function() {
		return <AdsPEAdgroupCreativeSection604 />;
	};

	let AdsPELeadGenFormSection606 = function() {
		return null;
	};

	let AdsPELeadGenFormContainer607 = function() {
		return <AdsPELeadGenFormSection606 />;
	};

	let XUICardHeaderTitle608 = function() {
		return (
			<span itemComponent={'span'} className={'_38my'}>
					{'Tracking'}
				{null}
				<span className={'_c1c'}/>
				</span>
		);
	};

	let XUICardSection609 = function() {
		return (
			<div className={'_5dw9 _5dwa _4-u3'} background={'transparent'}>
				{[
					<XUICardHeaderTitle608 key={'/.0'}/>,
				]}
				{undefined}
				{undefined}
				<div className={'_3s3-'}></div>
			</div>
		);
	};

	let XUICardHeader610 = function() {
		return <XUICardSection609 />;
	};

	let AdsCardHeader611 = function() {
		return <XUICardHeader610 />;
	};

	let XUIText612 = function() {
		return <span weight={'bold'} className={'_3ga-  _50f7'} size={'inherit'} display={'inline'}>{'Conversion Tracking'}</span>;
	};

	let ReactImage613 = function() {
		return <i src={null} className={'_5s_w _541d img sp_R48dKBxiJkP sx_dc2cdb'}/>;
	};

	let AdsPopoverLink614 = function() {
		return (
			<span onMouseEnter={function () { } } onMouseLeave={function () { } }>
					<span className={'_3o_j'}/>
					<ReactImage613 />
				</span>
		);
	};

	let AdsHelpLink615 = function() {
		return <AdsPopoverLink614 />;
	};

	let AdsCFHelpLink616 = function() {
		return <AdsHelpLink615 />;
	};

	let AdsPixelTrackingLabel617 = function() {
		return (
			<div className={'_3gay'}>
				<XUIText612 />
				<AdsCFHelpLink616 />
			</div>
		);
	};

	let ReactImage618 = function() {
		return <i src={null} className={'img _8o _8r img sp_UuU9HmrQ397 sx_ad67ef'}/>;
	};

	let XUIText619 = function() {
		return <div size={'medium'} weight={'bold'} shade={'medium'} display={'block'} className={'_3-8m  _c24  _50f4 _50f7'}>{'Facebook Pixel'}</div>;
	};

	let XUIGrayText620 = function() {
		return <XUIText619 />;
	};

	let XUIText621 = function() {
		return <span size={'medium'} weight={'inherit'} display={'inline'} className={' _50f4'}>{'Learn More'}</span>;
	};

	let Link622 = function() {
		return (
			<a href={'/help/336923339852238'} target={'_blank'} rel={undefined} onClick={function () { } }>
				<XUIText621 />
			</a>
		);
	};

	let XUIText623 = function() {
		return (
			<span shade={'medium'} size={'medium'} className={' _c24  _50f4'} weight={'inherit'} display={'inline'}>
				{'You can now create one pixel for tracking, optimization and remarketing.'}
				<span className={'_3-99'}>
					<Link622 />
				</span>
			</span>
		);
	};

	let XUIGrayText624 = function() {
		return <XUIText623 />;
	};

	let AbstractButton625 = function() {
		return (
			<button className={'_23ng _4jy0 _4jy4 _4jy1 _51sy selected _42ft'} label={null} onClick={function () { } } size={'large'} use={'confirm'} borderShade={'light'} suppressed={false} type='submit'
							value={'1'}>
				{undefined}
				{'Create a Pixel'}
				{undefined}
			</button>
		);
	};

	let XUIButton626 = function() {
		return <AbstractButton625 />;
	};

	let AdsPixelCreateButton627 = function() {
		return <XUIButton626 />;
	};

	let LeftRight628 = function() {
		return (
			<div className={'_23nf clearfix'} direction={'left'}>
				<div key={'left'} className={'_ohe lfloat'}>
					<ReactImage618 />
				</div>
				<div key={'right'} className={''}>
					<div className={'_42ef _8u'}>
						<div>
							<XUIGrayText620 />
							<XUIGrayText624 />
							<div className={'_3-8x'}>
								<AdsPixelCreateButton627 />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	let ImageBlock629 = function() {
		return <LeftRight628 />;
	};

	let AdsPixelCreationCard630 = function() {
		return (
			<div className={'_2pie'} horizontal={true}>
				<div className={'_23ne _4fsl'}>
					<ImageBlock629 />
				</div>
			</div>
		);
	};

	let AdsPixelTrackingSelector631 = function() {
		return (
			<div className={'_3-8x _4fsk'}>
				<AdsPixelCreationCard630 key={'FacebookPixelNUX'}/>
			</div>
		);
	};

	let AdsPixelTracking632 = function() {
		return (
			<div className={undefined}>
				<AdsPixelTrackingLabel617 />
				<div className={'_3-8x'}>
					<div></div>
				</div>
				<AdsPixelTrackingSelector631 />
			</div>
		);
	};

	let AdsPEPixelTracking633 = function() {
		return <AdsPixelTracking632 key={'tracking'}/>;
	};

	let AdsPEPixelTrackingContainer634 = function() {
		return <AdsPEPixelTracking633 />;
	};

	let AdsPEAdgroupAppTrackingSelectorContainer635 = function() {
		return null;
	};

	let AdsPEStandardTrackingSection636 = function() {
		return (
			<div>
				{null}
				<div className={'_3-96'}>
					<AdsPEPixelTrackingContainer634 />
				</div>
				<div className={'_3-96'}>
					<AdsPEAdgroupAppTrackingSelectorContainer635 />
				</div>
				{null}
			</div>
		);
	};

	let AdsPEStandardTrackingContainer637 = function() {
		return <AdsPEStandardTrackingSection636 />;
	};

	let XUICardSection638 = function() {
		return (
			<div className={'_12jy _4-u3'} background={'transparent'}>
				<div className={'_3-8j'}>
					<AdsPEStandardTrackingContainer637 />
				</div>
			</div>
		);
	};

	let AdsCardSection639 = function() {
		return <XUICardSection638 />;
	};

	let XUICard640 = function() {
		return (
			<div xuiErrorPosition={'above'} className={'_12k2 _4-u2  _4-u8'} background={'white'}>
				<AdsCardHeader611 />
				<AdsCardSection639 />
			</div>
		);
	};

	let ReactXUIError641 = function() {
		return <XUICard640 />;
	};

	let AdsCard642 = function() {
		return <ReactXUIError641 />;
	};

	let AdsPEAdgroupTrackingSection643 = function() {
		return <AdsCard642 />;
	};

	let AdsPEAdgroupTrackingSectionContainer644 = function() {
		return <AdsPEAdgroupTrackingSection643 />;
	};

	let AdsPEAdgroupIOSection645 = function() {
		return null;
	};

	let AdsPEAdgroupIOSectionContainer646 = function() {
		return <AdsPEAdgroupIOSection645 />;
	};

	let LeftRight647 = function() {
		return (
			<div flex={'left'} direction={'right'} className={'clearfix'}>
				<div key={'right'} className={'_ohf rfloat'}>
					<div className={'_20ro _20rp'}>
						<div>
							{null}
							<AdsPEAdgroupLinksSectionContainer518 />
							<AdsPEStickyArea543 />
						</div>
					</div>
				</div>
				<div key={'left'} className={''}>
					<div className={'_42ef'}>
						<div>
							<AdsPEAdgroupDestinationSectionContainer557 />
							<AdsPEAdgroupCreativeSectionContainer605 />
							<AdsPELeadGenFormContainer607 />
							<AdsPEAdgroupTrackingSectionContainer644 />
							<AdsPEAdgroupIOSectionContainer646 />
						</div>
					</div>
				</div>
			</div>
		);
	};

	let FlexibleBlock648 = function() {
		return <LeftRight647 />;
	};

	let AdsPEMultiColumnEditor649 = function() {
		return (
			<div className={'_2j_c _ykd'}>
				<div>
					<FluxContainer_r_483 />
					{null}
					<AdsPEAdgroupAutoNamingConfirmationContainer484 />
					<AdsPEAdgroupNameSectionContainer500 />
				</div>
				<FlexibleBlock648 />
			</div>
		);
	};

	let AdsPEAdgroupEditor650 = function() {
		return (
			<div>
				<AdsPEAdgroupHeaderSectionContainer481 />
				<AdsPEMultiColumnEditor649 />
			</div>
		);
	};

	let AdsPEAdgroupEditorContainer651 = function() {
		return <AdsPEAdgroupEditor650 key={'98010048849345'}/>;
	};

	let AdsPESideTrayTabContent652 = function() {
		return (
			<div className={'_1o_8 _44ra _5cyn'}>
				<AdsPEAdgroupEditorContainer651 />
			</div>
		);
	};

	let AdsPEEditorTrayTabContent653 = function() {
		return <AdsPESideTrayTabContent652 />;
	};

	let AdsPEMultiTabDrawer654 = function() {
		return (
			<div style={{ height: 550, width: 1027 }} tabButtons={{}} tabContentPanes={{}} enableAnimation={true} showButton={true} className={'_2kev _2kew _2kex'}>
				<div className={'_2kf0'}>
					<AdsPEEditorTrayTabButton469 key={'editor_tray_button'}/>
					<AdsPEInsightsTrayTabButton472 key={'insights_tray_button'}/>
					<AdsPENekoDebuggerTrayTabButton474 key={'neko_debugger_tray_button'}/>
				</div>
				<div className={'_2kf1'}>
					<FBDragHandle475 />
					<AdsPEEditorTrayTabContent653 key={'EDITOR_DRAWER'}/>
					{null}
				</div>
			</div>
		);
	};

	let FluxContainer_x_655 = function() {
		return <AdsPEMultiTabDrawer654 />;
	};

	let AdsBugReportContainer656 = function() {
		return null;
	};

	let AdsPEAudienceSplittingDialog657 = function() {
		return null;
	};

	let AdsPEAudienceSplittingDialogContainer658 = function() {
		return (
			<div>
				<AdsPEAudienceSplittingDialog657 />
			</div>
		);
	};

	let FluxContainer_p_659 = function() {
		return null;
	};

	let AdsPECreateDialogContainer660 = function() {
		return null;
	};

	let AdsPEContainer661 = function() {
		return (
			<div id={'ads_pe_container'}>
				{null}
				<FluxContainer_ja_26 />
				<FluxContainer_w_56 />
				<FluxContainer_r_463 />
			<FluxContainer_q_464 />
			<FluxContainer_y_466 />
				{null}
			<FluxContainer_x_655 />
			<AdsBugReportContainer656 />
				{null}
			<AdsPEAudienceSplittingDialogContainer658 />
				{null}
				{null}
				{null}
			<FluxContainer_p_659 />
				<AdsPECreateDialogContainer660 />
			</div>
		);
	};

	let Benchmark = function() {
		return <AdsPEContainer661 />;
	};

	render(<Benchmark />, container);
}

describe('Benchmark - functionalComponent (JSX)', () => {
	let container;

	beforeEach(function() {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(function() {
		document.body.removeChild(container);
		render(null, container);
	});

	it('Run the benchmark once', () => {
		runBenchmark(container);
	});
});
