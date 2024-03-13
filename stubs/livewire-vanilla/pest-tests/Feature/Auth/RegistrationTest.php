<?php

use App\Livewire\Auth\Register;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;

beforeEach(function () {
    $this->refreshDatabase();
});

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response
        ->assertOk()
        ->assertSee('pages.auth.register');
});

test('new users can register', function () {
    Livewire::test(Register::class)
        ->set('name', 'Test User')
        ->set('email', 'test@example.com')
        ->set('password', 'password')
        ->set('password_confirmation', 'password')
        ->call('register')
        ->assertRedirect(route('dashboard', false));

    expect(auth()->user())->toBeAuthenticated();
});