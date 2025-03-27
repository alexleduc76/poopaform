import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"
import stylistic from '@stylistic/eslint-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		plugins: {
			'@stylistic': stylistic
		},
		rules: {
			"@stylistic/array-bracket-newline": [
				"error",
				"consistent"
			],
			"@stylistic/array-bracket-spacing": [
				"error",
				"always",
				{
					singleValue: true,
					objectsInArrays: true,
					arraysInArrays: true
				}
			],
			"@stylistic/arrow-parens": [
				"off",
				"always"
			],
			"@stylistic/arrow-spacing": [
				"error",
				{
					before: true,
					after: true
				}
			],
			"@stylistic/block-spacing": [
				"error",
				"always"
			],
			"@stylistic/brace-style": [
				"error",
				"stroustrup"
			],
			"@stylistic/comma-dangle": [
				"off",
				"always-multiline"
			],
			"@stylistic/comma-spacing": [
				"error",
				{
					before: false,
					after: true
				}
			],
			"@stylistic/computed-property-spacing": [
				"error",
				"always"
			],
			curly: [
				"error",
				"all"
			],
			eqeqeq: [
				"error",
				"smart"
			],
			"@stylistic/function-call-spacing": [
				"error",
				"never"
			],
			"@stylistic/generator-star-spacing": [
				"error",
				{
					before: true,
					after: false
				}
			],
			"@stylistic/implicit-arrow-linebreak": [
				"error",
				"beside"
			],
			"@stylistic/indent": [
				"error",
				"tab",
				{
					SwitchCase: 1
				}
			],
			"@stylistic/jsx-quotes": [
				"error",
				"prefer-single"
			],
			"@stylistic/jsx-closing-bracket-location": [
				1,
				"tag-aligned"
			],
			"@stylistic/key-spacing": [
				"error",
				{
					beforeColon: false,
					afterColon: true
				}
			],
			"@stylistic/keyword-spacing": [
				"error",
				{
					before: true,
					after: true
				}
			],
			"init-declarations": [
				"error",
				"always"
			],
			"@stylistic/lines-around-comment": [
				"error",
				{
					beforeBlockComment: true,
					allowBlockStart: true,
					allowClassStart: true,
					allowObjectStart: true
				}
			],
			"@stylistic/multiline-ternary": [
				"error",
				"always-multiline"
			],
			"@stylistic/newline-per-chained-call": [
				"error"
			],
			"@stylistic/no-confusing-arrow": [
				"error"
			],
			"no-constant-condition": [
				"error"
			],
			"no-empty-character-class": [
				"error"
			],
			"@stylistic/no-extra-semi": [
				"error"
			],
			"no-lonely-if": [
				"warn"
			],
			"@stylistic/no-mixed-operators": [
				"error"
			],
			"@stylistic/no-mixed-spaces-and-tabs": [
				"error",
				"smart-tabs"
			],
			"@stylistic/no-multi-spaces": [
				"error"
			],
			"@stylistic/no-multiple-empty-lines": [
				"error",
				{
					max: 2
				}
			],
			"no-param-reassign": [
				"warn",
				{
					props: true,
					ignorePropertyModificationsForRegex: [
						"^mut_",
						"state"
					]
				}
			],
			"no-redeclare": [
				"error"
			],
			"no-trailing-spaces": [
				"error"
			],
			"no-undef": [
				"off"
			],
			"no-unreachable": [
				"warn"
			],
			"no-unused-vars": [
				"warn"
			],
			"@typescript-eslint/no-unused-vars": [
				"warn"
			],
			"no-useless-computed-key": [
				"error"
			],
			"no-var": [
				"warn"
			],
			"@stylistic/no-whitespace-before-property": [
				"error"
			],
			"@stylistic/nonblock-statement-body-position": [
				"error",
				"below"
			],
			"@stylistic/object-curly-spacing": [
				"error",
				"always"
			],
			"@stylistic/quote-props": [
				"error",
				"as-needed"
			],
			"@stylistic/rest-spread-spacing": [
				"error",
				"never"
			],
			"@stylistic/semi-spacing": [
				"error",
				{
					before: false,
					after: true
				}
			],
			'@stylistic/semi': [
				"error",
				"never"
			],
			"@stylistic/space-before-blocks": [
				"error",
				{
					functions: "always",
					keywords: "always",
					classes: "always"
				}
			],
			"@stylistic/space-before-function-paren": [
				"error",
				{
					anonymous: "always",
					named: "never",
					asyncArrow: "always"
				}
			],
			"@stylistic/space-in-parens": [
				"error",
				"never"
			],
			"@stylistic/space-infix-ops": [
				"error",
				{
					int32Hint: false
				}
			],
			"@stylistic/space-unary-ops": [
				"error"
			],
			"@stylistic/spaced-comment": [
				"error",
				"always",
				{
					exceptions: [
						"-",
						"+"
					]
				}
			],
			"@stylistic/switch-colon-spacing": [
				"error",
				{
					after: true,
					before: false
				}
			],
			"@stylistic/template-curly-spacing": [
				"error",
				"never"
			],
			"@stylistic/type-annotation-spacing": [
				"error"
			],
			"@stylistic/jsx-curly-spacing": [
				"error",
				{
					when: "always",
					children: {
						when: "always"
					}
				}
			],
			"unicode-bom": [
				"error",
				"never"
			],
			"@stylistic/yield-star-spacing": [
				"error",
				{
					before: true,
					after: false
				}
			],
			yoda: [
				"error"
			]
		}
	}
]

export default eslintConfig
