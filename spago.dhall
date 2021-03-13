{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ sources = [ "src/**/*.purs", "test/**/*.purs" ]
, name = "my-project"
, dependencies =
  [ "effect"
  , "console"
  , "maybe"
  , "foreign-object"
  , "redux"
  , "record-extra"
  , "typelevel-prelude"
  ]
, packages = ./packages.dhall
}
