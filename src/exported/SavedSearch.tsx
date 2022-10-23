import IconSavedSearchFill0Wght100Grad0Opsz48 from '../components/SavedSearchFill0Wght100Grad0Opsz48'
import IconSavedSearchFill0Wght200Grad0Opsz48 from '../components/SavedSearchFill0Wght200Grad0Opsz48'
import IconSavedSearchFill0Wght300Grad0Opsz48 from '../components/SavedSearchFill0Wght300Grad0Opsz48'
import IconSavedSearchFill0Wght400Grad0Opsz48 from '../components/SavedSearchFill0Wght400Grad0Opsz48'
import IconSavedSearchFill0Wght500Grad0Opsz48 from '../components/SavedSearchFill0Wght500Grad0Opsz48'
import IconSavedSearchFill0Wght600Grad0Opsz48 from '../components/SavedSearchFill0Wght600Grad0Opsz48'
import IconSavedSearchFill0Wght700Grad0Opsz48 from '../components/SavedSearchFill0Wght700Grad0Opsz48'
import IconSavedSearchFill1Wght100Grad0Opsz48 from '../components/SavedSearchFill1Wght100Grad0Opsz48'
import IconSavedSearchFill1Wght200Grad0Opsz48 from '../components/SavedSearchFill1Wght200Grad0Opsz48'
import IconSavedSearchFill1Wght300Grad0Opsz48 from '../components/SavedSearchFill1Wght300Grad0Opsz48'
import IconSavedSearchFill1Wght400Grad0Opsz48 from '../components/SavedSearchFill1Wght400Grad0Opsz48'
import IconSavedSearchFill1Wght500Grad0Opsz48 from '../components/SavedSearchFill1Wght500Grad0Opsz48'
import IconSavedSearchFill1Wght600Grad0Opsz48 from '../components/SavedSearchFill1Wght600Grad0Opsz48'
import IconSavedSearchFill1Wght700Grad0Opsz48 from '../components/SavedSearchFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconSavedSearch = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconSavedSearchFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconSavedSearchFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconSavedSearchFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconSavedSearchFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconSavedSearchFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconSavedSearchFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconSavedSearchFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconSavedSearchFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconSavedSearchFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconSavedSearchFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconSavedSearchFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconSavedSearchFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconSavedSearchFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconSavedSearchFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
