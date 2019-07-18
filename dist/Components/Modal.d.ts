import * as React from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { IModalProps, IModalListInDto, IModalState } from '../Interfaces';
export declare class ModalComponent extends React.PureComponent<IModalProps, IModalState> {
    private flatListRef;
    private numToRender;
    state: IModalState;
    static defaultProps: {
        showToTopButton: boolean;
        modalAnimationType: string;
        showAlphabeticalIndex: boolean;
        searchInputTextColor: string;
        autoGenerateAlphabeticalIndex: boolean;
        sortingLanguage: string;
        removeClippedSubviews: boolean;
        selectPlaceholderText: string;
        searchPlaceholderText: string;
        autoSort: boolean;
        items: any[];
        disabled: boolean;
        requireSelection: boolean;
    };
    private viewabilityConfig;
    constructor(props: IModalProps);
    private _clearComponent;
    clearComponent(): void;
    componentDidMount(): void;
    private _openModal;
    openModal(): void;
    render(): JSX.Element;
    private _onViewableItemsChanged;
    private _onClose;
    onClose(): void;
    private _onBackRequest;
    onBackRequest(): void;
    private _scrollToUp;
    scrollToUp(): void;
    private _onScrolling;
    onScrolling(e: NativeSyntheticEvent<NativeScrollEvent>): void;
    private _renderItem;
    renderItem(item: IModalListInDto, index: number): JSX.Element;
    private _setText;
    setText(text: string): void;
    private _onSelectMethod;
    onSelectMethod(key: IModalListInDto): IModalListInDto | void;
    private _setAlphabet;
    setAlphabet(alphabet: string): void;
}
