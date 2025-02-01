<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Model implements JWTSubject
{
  use HasFactory;

    // Define the getJWTIdentifier() method to return the unique user identifier (typically the user ID)
    public function getJWTIdentifier()
    {
        return $this->getKey(); // This returns the user's primary key (ID)
    }

    // Define the getJWTCustomClaims() method to return any custom claims you want in the JWT token
    public function getJWTCustomClaims()
    {
        return []; // You can return an empty array or add custom claims here if needed
    }

    public function getAuthIdentifierName()
    {
        return 'id';  // Or the name of the field you want to use as the unique identifier (default is 'id')
    }

    public function getAuthIdentifier()
    {
        return $this->getKey();  // The primary key field (usually 'id')
    }
    public function getRememberToken()
    {
        return $this->remember_token;  // Laravel requires this method, but you can leave it as is.
    }

    public function setRememberToken($value)
    {
        $this->remember_token = $value;  // Laravel requires this method as well
    }
  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'name',
    'email',
    'password',
  ];



}
