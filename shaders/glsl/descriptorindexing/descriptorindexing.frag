// Copyright 2021 Sascha Willems

#version 450

#extension GL_EXT_nonuniform_qualifier : require

layout (rgba8ui, set = 0, binding = 1) readonly uniform uimage2D texture2;
layout (rgba8ui, set = 0, binding = 2) readonly uniform uimage2D textures[];

layout (location = 0) in vec2 inUV;
layout (location = 1) flat in int inTexIndex;

layout (location = 0) out vec4 outFragColor;

void main()
{
	vec4 textureRead = imageLoad(texture2, ivec2(inUV*vec2(imageSize(texture2))));
	vec4 textureArrayRead = imageLoad(textures[0], ivec2(inUV*vec2(imageSize(textures[0]))));
	outFragColor = vec4(textureRead.rgb, 1.0);
	//outFragColor = vec4(textureArrayRead.rgb * 0.2 + textureRead.rgb * 0.8, 1.0);
	//outFragColor = texture(textures[nonuniformEXT(inTexIndex)], inUV) * 0.1 + texture(texture2, inUV) * 0.9;
}