module State.Item where

import Prelude

type Item =
  { name :: String }

item :: String -> Item
item name =
  { name }
