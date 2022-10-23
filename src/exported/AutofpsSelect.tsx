import IconAutofpsSelectFill0Wght100Grad0Opsz48 from '../components/AutofpsSelectFill0Wght100Grad0Opsz48'
import IconAutofpsSelectFill0Wght200Grad0Opsz48 from '../components/AutofpsSelectFill0Wght200Grad0Opsz48'
import IconAutofpsSelectFill0Wght300Grad0Opsz48 from '../components/AutofpsSelectFill0Wght300Grad0Opsz48'
import IconAutofpsSelectFill0Wght400Grad0Opsz48 from '../components/AutofpsSelectFill0Wght400Grad0Opsz48'
import IconAutofpsSelectFill0Wght500Grad0Opsz48 from '../components/AutofpsSelectFill0Wght500Grad0Opsz48'
import IconAutofpsSelectFill0Wght600Grad0Opsz48 from '../components/AutofpsSelectFill0Wght600Grad0Opsz48'
import IconAutofpsSelectFill0Wght700Grad0Opsz48 from '../components/AutofpsSelectFill0Wght700Grad0Opsz48'
import IconAutofpsSelectFill1Wght100Grad0Opsz48 from '../components/AutofpsSelectFill1Wght100Grad0Opsz48'
import IconAutofpsSelectFill1Wght200Grad0Opsz48 from '../components/AutofpsSelectFill1Wght200Grad0Opsz48'
import IconAutofpsSelectFill1Wght300Grad0Opsz48 from '../components/AutofpsSelectFill1Wght300Grad0Opsz48'
import IconAutofpsSelectFill1Wght400Grad0Opsz48 from '../components/AutofpsSelectFill1Wght400Grad0Opsz48'
import IconAutofpsSelectFill1Wght500Grad0Opsz48 from '../components/AutofpsSelectFill1Wght500Grad0Opsz48'
import IconAutofpsSelectFill1Wght600Grad0Opsz48 from '../components/AutofpsSelectFill1Wght600Grad0Opsz48'
import IconAutofpsSelectFill1Wght700Grad0Opsz48 from '../components/AutofpsSelectFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconAutofpsSelect = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconAutofpsSelectFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconAutofpsSelectFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconAutofpsSelectFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconAutofpsSelectFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconAutofpsSelectFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconAutofpsSelectFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconAutofpsSelectFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconAutofpsSelectFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconAutofpsSelectFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconAutofpsSelectFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconAutofpsSelectFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconAutofpsSelectFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconAutofpsSelectFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconAutofpsSelectFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}
