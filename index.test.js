'use strict';

// 自作モジュールのテストで使用するものたち
global.$ = require('jquery');
global.jQuery = require('jquery');
require('./index.js');

// describe：複数のテストをグループとしてまとめる機能、使わなくてもテストはできる
describe('テストグループ', () => {

	// テスト用のDOMを生成
	document.body.innerHTML =
	'<button class="myplugin-button">ボタン</button>' +
	'<h1 class="myplugin-target">ターゲット</h1>';

	// テスト内容①
	test('通常テスト', () => {

		// 生成したDOMに自作プラグインを適用
		$('.myplugin-button').myplugin({
			target: '.myplugin-target',
			addClass: 'is-active'
		});

		// clickイベントを強制発火させる
		$('.myplugin-button').click();

		// テスト内容（.myplugin-targetのクラスの文字列一致を判定）
		expect($('.myplugin-target').attr('class')).toBe('myplugin-target is-active');

		// 次のテストのためにクラスを削除
		$('.myplugin-target').removeClass('is-active');

	});

	// テスト内容②
	test('フェードテスト', () => {
		$('.myplugin-button').myplugin({
			target: '.myplugin-target',
			addClass: 'is-active',
			fade: true
		});
		$('.myplugin-button').click();
		setTimeout(function() {
			expect($('.myplugin-target').attr('style')).toBe('display: none;');
		}, 1000);
		$('.myplugin-target').removeClass('is-active');
	});

	// テスト内容③：配列を渡さずに実行した際に初期設定のクラスが追加されるか判定
	test('初期値テスト', () => {
		$('.myplugin-button').myplugin();
		$('.myplugin-button').click();
		expect($('.myplugin-target').attr('class')).toBe('myplugin-target on');
	});

});
