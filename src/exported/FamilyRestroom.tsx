import IconFamilyRestroomFill0Wght100Grad0Opsz48 from '../components/FamilyRestroomFill0Wght100Grad0Opsz48'
import IconFamilyRestroomFill0Wght200Grad0Opsz48 from '../components/FamilyRestroomFill0Wght200Grad0Opsz48'
import IconFamilyRestroomFill0Wght300Grad0Opsz48 from '../components/FamilyRestroomFill0Wght300Grad0Opsz48'
import IconFamilyRestroomFill0Wght400Grad0Opsz48 from '../components/FamilyRestroomFill0Wght400Grad0Opsz48'
import IconFamilyRestroomFill0Wght500Grad0Opsz48 from '../components/FamilyRestroomFill0Wght500Grad0Opsz48'
import IconFamilyRestroomFill0Wght600Grad0Opsz48 from '../components/FamilyRestroomFill0Wght600Grad0Opsz48'
import IconFamilyRestroomFill0Wght700Grad0Opsz48 from '../components/FamilyRestroomFill0Wght700Grad0Opsz48'
import IconFamilyRestroomFill1Wght100Grad0Opsz48 from '../components/FamilyRestroomFill1Wght100Grad0Opsz48'
import IconFamilyRestroomFill1Wght200Grad0Opsz48 from '../components/FamilyRestroomFill1Wght200Grad0Opsz48'
import IconFamilyRestroomFill1Wght300Grad0Opsz48 from '../components/FamilyRestroomFill1Wght300Grad0Opsz48'
import IconFamilyRestroomFill1Wght400Grad0Opsz48 from '../components/FamilyRestroomFill1Wght400Grad0Opsz48'
import IconFamilyRestroomFill1Wght500Grad0Opsz48 from '../components/FamilyRestroomFill1Wght500Grad0Opsz48'
import IconFamilyRestroomFill1Wght600Grad0Opsz48 from '../components/FamilyRestroomFill1Wght600Grad0Opsz48'
import IconFamilyRestroomFill1Wght700Grad0Opsz48 from '../components/FamilyRestroomFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFamilyRestroom = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFamilyRestroomFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFamilyRestroomFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFamilyRestroomFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFamilyRestroomFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFamilyRestroomFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFamilyRestroomFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFamilyRestroomFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFamilyRestroomFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFamilyRestroomFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFamilyRestroomFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFamilyRestroomFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFamilyRestroomFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFamilyRestroomFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFamilyRestroomFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
